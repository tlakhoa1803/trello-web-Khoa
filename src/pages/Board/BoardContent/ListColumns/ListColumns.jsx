import Box from '@mui/material/Box'
import Columns from './Columns/Columns'
import { Button } from '@mui/material'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'

function ListColumns({ columns }) {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}
    >
      {columns?.map(column => <Columns key={column._id} column={column} />)}
      {/* Add new columns */}
      <Box
        sx={{
          minWidth:'200px',
          maxWidth:'200px',
          mx:2,
          borderRadius:'6px',
          height:'fit-content',
          bgcolor:'#ffffff3d'
        }}
      >
        <Button
          startIcon={<AddToPhotosIcon/>}
          sx={{
            color:'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new columns
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns