import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'

function Columns() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {setAnchorEl(event.currentTarget)}
  const handleClose = () => {setAnchorEl(null)}
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643': '#70a1ff'),
      minWidth:'300px',
      maxWidth:'300px',
      ml: 2,
      borderRadius:'6px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentdHeight} - ${theme.spacing(5)})`
    }}
    >
      {/* Header */}
      <Box sx={{
        height: (theme) => theme.trelloCustom.columnHeaderHeight,
        p:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      >
        <Typography variant= 'h6' sx={{ fontWeight: 'Bold', cursor:'pointer', fontSize:'1.2rem' }}>Title Content</Typography>
        <Box>
          <Tooltip title='More'>
            <ExpandMoreIcon
              sx={{ color:'text.primary', cursor:'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add Card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Archive This Column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Remove This Column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <ListCards/>
      {/* Footer */}
      <Box sx={{
        height: (theme) => theme.trelloCustom.columnFooterHeight,
        p:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      >
        <Button sx={{ color:'black' }} startIcon={<AddCardIcon/>}>Add new card</Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon sx={{ cursor:'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Columns