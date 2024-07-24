import { useState } from 'react'
import ModeSelect from '~/components/ModeSelect'
import { Box } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import CreateIcon from '@mui/icons-material/Create'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
      width:'100%',
      height: (theme) => theme.trelloCustom.appBarHeigth,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50': '#2980b9' )
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}/>
        <Box sx={{ display:'flex', alignItems:'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} inheritViewBox sx={{ color: 'white' }}/>
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight:'bold', color: 'white' }}>Trello</Typography>
        </Box>
        {/* breakpoint */}
        <Box sx={{ display:{ xs:'none', md:'flex' }, gap: 1 }}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button
            sx= {{ color:'white', border:'none', '&:hover': { border:'none' } }}
            variant="outlined"
            startIcon={<CreateIcon/>}
          >
              Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <TextField
          id="filled-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={ ( e ) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx= {{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{ color: searchValue? 'white' : 'transparent', cursor: 'pointer' }}
                onClick = {() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '200px',
            '& label':{ color:'white' },
            '& input':{ color:'white' },
            '& label.Mui-focused':{ color:'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />
        <ModeSelect/>
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer', color: 'white' }}><NotificationsNoneIcon /></Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar