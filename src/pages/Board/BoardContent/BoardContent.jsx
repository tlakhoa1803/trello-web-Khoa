import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
  // PointerSensor
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Cards from './ListColumns/Columns/ListCards/Cards/Cards'
import Columns from './ListColumns/Columns/Columns'
import { cloneDeep } from 'lodash'

function BoardContent({ board }) {
  const ACTIVE_DRAG_ITEMS_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEMS_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEMS_TYPE_CARD'
  }
  //Yêu cầu chuột di chuyển 10px thì kích hoạt event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  // Chuột di chuyển 10px mới kích hoạt event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  // Dùng chạm dùng cho điện thoại
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const sensors = useSensors(mouseSensor, touchSensor )
  const [orderedColumns, setOrderedColumns] = useState([])
  //Cùng 1 thời điểm chỉ có thể kéo 1 phần tử là column hoặc card
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumn, setOldColumn] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board] )
  // Tìm 1 column theo Card ID
  const findColumnCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map( card => card._id )?.includes(cardId))
  }
  //Cập nhật lại State khi chuyển các Card giữa các Column khác nhau
  const moveCard = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDragingCardId,
    activeDraggingCardData
  ) => {
    setOrderedColumns (prevColumns => {
      // Tìm vị trí index của overCard trong Column mà card được thả
      const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
      let newCardIndex
      const isBelowOverItem =active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
      const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
      //Column cũ
      if (nextActiveColumn) {
        //Xóa card ở Column cũ
        nextActiveColumn.cards= nextActiveColumn.cards.filter(card => card._id !== activeDragingCardId)
        //Cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map( card => card._id )
      }
      //Column mới
      if (nextOverColumn) {
        // Kiểm tra card đang kéo có tồn tại ở Over Column chưa, nếu có thì xóa thằng ở vị trí cũ
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDragingCardId)
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id
        }
        //Thêm card đang kéo vào OverColumn vị trí mới
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map( card => card._id )
      }
      return nextColumns
    })
  }
  //Lưu trữ dữ liệu của phần tử đang được kéo
  const handleDragStart =(event) => {
    setActiveDragItemId( event?.active?.id )
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEMS_TYPE.CARD : ACTIVE_DRAG_ITEMS_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data?.current?.columnId) {
      setOldColumn(findColumnCardId(event?.active?.id))
    }
  }

  // Trigger trong quá trình kéo (Drag) 1 phần tử
  const handleDragOver = (event) => {
    // Không làm gì thêm nếu kéo thả Columns
    if ( activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.COLUMN ) {
      return
    }
    //Xử lí kéo (Drag) Cards
    const { active, over } = event
    // Nếu kéo ra khỏi mà không có ô chưa thì return
    if (! active || !over) return
    //activeDragingCardId là card đang được kéo
    const { id: activeDragingCardId, data: { current: activeDraggingCardData } } = active
    //overCardId là card tương tác với card được kéo
    const { id: overCardId } = over
    // Tìm 2 column theo CardId
    const activeColumn = findColumnCardId( activeDragingCardId )
    const overColumn = findColumnCardId (overCardId)
    // Nếu ko tồn tại 1 trong 2 column thì không làm gì hết
    if (!activeColumn || !overColumn) return
    // Xử lý logic ở đây chỉ khi kéo card qua 2 column khác nhau, còn nếu kéo card trong chính column ban đầu của nó thì không làm gì
    // Vì đây đang là đoạn xử lý lúc kéo (handleDragOver), còn xử lý lúc kéo xong xuôi thì nó lại là vấn đề khác ở (handleDragEnd)
    if (activeColumn._id !== overColumn._id) {
      moveCard ( overColumn, overCardId, active, over, activeColumn, activeDragingCardId, activeDraggingCardData )
    }
  }
  // Trigger trong quá trình thả 1 phần tử
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (! active || !over) return
    // Xử lý kéo thả Card
    if ( activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.CARD ) {
      //activeDragingCardId là card đang được kéo
      const { id: activeDragingCardId, data: { current: activeDraggingCardData } } = active
      //overCardId là card tương tác với card được kéo
      const { id: overCardId } = over
      // Tìm 2 column theo CardId
      const activeColumn = findColumnCardId( activeDragingCardId )
      const overColumn = findColumnCardId (overCardId)
      // Nếu ko tồn tại 1 trong 2 column thì không làm gì hết
      if (!activeColumn || !overColumn) return
      if (oldColumn._id !== overColumn._id) {
        moveCard ( overColumn, overCardId, active, over, activeColumn, activeDragingCardId, activeDraggingCardData )
      } else {
        // Kéo thả 2 card trong 1 columns
        // lấy vị trí cũ từ active
        const oldCardIndex = oldColumn?.cards?.findIndex(c => c._id === activeDragItemId )
        // lấy vị trí mới từ active
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId )
        // Dùng array move để kéo card trong 1 column
        const dndOrderedCard = arrayMove( oldColumn?.cards, oldCardIndex, newCardIndex)
        setOrderedColumns (prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          // Tìm tới Column đang thả trong cùng 1 column
          const targetColumn = nextColumns.find(c => c._id === overColumn._id)
          // Cập nhật lại 2 giá trị mới cho Card và Card IDs
          targetColumn.cards = dndOrderedCard
          targetColumn.cardOrderIds = dndOrderedCard.map( card => card._id )
          // Trả về giá trị state mới chuẩn vị trí
          return nextColumns
        })
      }
    }

    //Xử lí kéo thả Column
    if ( activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.COLUMN ) {
      // Nếu kéo ra khỏi mà không có ô chưa thì return
      if ( active.id != over.id ) {
        // lấy vị trí cũ từ active
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id )
        // lấy vị trí mới từ active
        const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id )
        const dndOrderedColumns = arrayMove( orderedColumns, oldColumnIndex, newColumnIndex)
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        //Cập nhật lại state sau khi kéo thả
        setOrderedColumns(dndOrderedColumns)
      }
    }
    // Những dữ liệu sau khi kéo thả luôn phải về null (giá trị mặc định ban đầu)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumn(null)
  }
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } } ) }
  return (
    <DndContext onDragStart={ handleDragStart } onDragOver={ handleDragOver } onDragEnd={ handleDragEnd } sensors={sensors}
      // Thuật Toán Phát Hiện Va Chạm
      collisionDetection={ closestCorners }>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db'),
        width:'100%',
        height: (theme) => theme.trelloCustom.boardContentdHeight,
        display: 'flex',
        padding: '10px 0'
      }}>
        <ListColumns columns={ orderedColumns }/>
        <DragOverlay dropAnimation={dropAnimation}>
          {(!activeDragItemId || !activeDragItemType) && null}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.COLUMN && <Columns column={ activeDragItemData }/> )}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.CARD && <Cards card={ activeDragItemData }/> )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
export default BoardContent