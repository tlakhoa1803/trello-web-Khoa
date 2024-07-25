import Box from '@mui/material/Box'
import Cards from './Cards/Cards'

function ListCards() {
  return (
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
      <Cards/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
      <Cards temporaryHideMedia/>
    </Box>
  )
}

export default ListCards