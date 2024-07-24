import React from 'react'
import { Box } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ height: 34, width: 34 }}
            alt='Khoa'
            src='https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/436227910_1876911776154793_6891603738475757147_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHARW7Mr1n05cwEP-DqdyXaOMxpj5b5eZA4zGmPlvl5kPVMhEcJyeUNPDpu-YGdcvCITID8a5evDhUrEe1Fl1g3&_nc_ohc=YcOUJT-ShPYQ7kNvgENBwIH&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYDdy7Cfe9T7LoQV8uHTUFyDtecQk3_hlLveIRvDn_91vA&oe=66A68146'>
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile