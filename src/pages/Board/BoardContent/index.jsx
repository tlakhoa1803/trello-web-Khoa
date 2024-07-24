import { Box } from '@mui/material'
function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#686de0'),
      width:'100%',
      height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeigth} - ${theme.trelloCustom.boardBardHeight} )`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Khoa đẹp trai
    </Box>
  )
}
export default BoardContent