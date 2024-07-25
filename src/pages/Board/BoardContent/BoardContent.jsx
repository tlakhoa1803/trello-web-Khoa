import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db'),
      width:'100%',
      height: (theme) => theme.trelloCustom.boardContentdHeight,
      display: 'flex',
      padding: '10px 0'
    }}>
      <ListColumns/>
    </Box>
  )
}
export default BoardContent