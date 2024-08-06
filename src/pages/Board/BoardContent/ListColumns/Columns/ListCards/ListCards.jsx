import Box from '@mui/material/Box'
import Cards from './Cards/Cards'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  return (
    <SortableContext items ={ cards?.map(c => c._id) } strategy = {verticalListSortingStrategy}>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        m: '0 5px',
        gap: 1,
        p: '0 5px',
        overflowX:'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentdHeight} - ${theme.spacing(5)} - ${theme.trelloCustom.columnHeaderHeight} - ${theme.trelloCustom.columnFooterHeight})`
      }}
      >
        {cards?.map(card => <Cards key={card._id} card={card} /> )}
      </Box>
    </SortableContext>
  )
}

export default ListCards