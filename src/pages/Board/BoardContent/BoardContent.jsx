import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors
  // PointerSensor
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  //Yêu cầu chuột di chuyển 10px thì kích hoạt event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const sensors = useSensors(mouseSensor, touchSensor )
  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board] )

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if ( active.id != over.id ) {
      // lấy vị trí cũ từ active
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id )
      // lấy vị trí mới từ active
      const newIndex = orderedColumns.findIndex(c => c._id === over.id )
      const dndOrderedColumns = arrayMove( orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      //Cập nhật lại state sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={ handleDragEnd } sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db'),
        width:'100%',
        height: (theme) => theme.trelloCustom.boardContentdHeight,
        display: 'flex',
        padding: '10px 0'
      }}>
        <ListColumns columns={ orderedColumns }/>
      </Box>
    </DndContext>
  )
}
export default BoardContent