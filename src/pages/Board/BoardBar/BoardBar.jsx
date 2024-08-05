import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'
const BoardBarMenuStyle = {
  color:'white', backgroundColor:'transparent', border: 'none', paddingX: '2px', borderRadius:'4px',
  '.MuiSvgIcon-root': {
    color:'white'
  },
  '&:hover':{
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50': '#2980b9')
  }
}
function BoardBar( { board } ) {
  return (
    <Box px={ 2 } sx={{
      width:'100%',
      height: (theme) => theme.trelloCustom.boardBardHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={BoardBarMenuStyle}
          icon={<DashboardIcon />}
          label= {board?.title}
          onClick={() => {}}
        />
        <Chip
          sx={BoardBarMenuStyle}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type) }
          onClick={() => {}}
        />
        <Chip
          sx={BoardBarMenuStyle}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}}
        />
        <Chip
          sx={BoardBarMenuStyle}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip
          sx={BoardBarMenuStyle}
          icon={<FilterIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color:'white',
            borderColor: 'white',
            '&:hover': { borderColor:'white' }
          }}
        >
            Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '8px',
            '& .MuiAvatar-root':{
              width:'34px',
              height:'34px',
              border: 'none',
              fontSize: '15px',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#95a5a6' }
            }
          }}
        >
          <Tooltip title='dhtbinh'>
            <Avatar
              alt="Bình"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/356623904_631631788904066_1139081624838397631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFeunWmHcLTyOPi9G20xGVoiH0BQMNFw5SIfQFAw0XDlNbOHALxry6zSGiC5nz2Ubee5CHkZZTPPTQKRqNUvxZx&_nc_ohc=MBoD5ROCE7cQ7kNvgFLBInJ&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYCyHHN1CV5SKLRA63cjoNlzknqjFjvJKZS2XEP0o7Rulg&oe=66B509D4"
            />
          </Tooltip>
          <Tooltip title='pcphat'>
            <Avatar
              alt="Phát"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t1.6435-9/147414105_3595653833993362_5227749370610096712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG2yV6ZEkHhFSfZcrZhrWkWEjW1IwwbfpcSNbUjDBt-lxCpS5ns8Y95SSUjF2xP0BzZrRA8UPmRAdyJyf_UZv1y&_nc_ohc=twYADB9L9KYQ7kNvgHI5zJd&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYDrL6yk_SsSIR3UWGFg9A3ehn9psf7SQYOWQR7jq9oBnQ&oe=66D6B7BF"
            />
          </Tooltip>
          <Tooltip title='nntmy'>
            <Avatar
              alt="My"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t1.6435-9/149743493_117977063566070_233409553525939448_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXozHBq1bh8EErMgfiYhxyXGBi-_rU6pFcYGL7-tTqkUc2oqJjZslM_DVySJuyYG6XNFh9hSYBYwbR2_PMYKVT&_nc_ohc=mnMeR_3ZhKcQ7kNvgGzsMBX&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYCRnmbRe583lAZz3m4gpKmg58XN8nwBZXxW-nhRROnpUw&oe=66D6B88F"
            />
          </Tooltip>
          <Tooltip title='pkbang'>
            <Avatar
              alt="Băng"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t1.6435-9/204164179_103654095305564_1405165831633730882_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH2qq54IxHOKjjwQoXV1h6ZSgMwRjpaTHlKAzBGOlpMeWBOWTLl950M7FfgpNIRtBc8sM9B1zPsbr8zM6h5Bjjq&_nc_ohc=7brhh0e2PewQ7kNvgFU0WkD&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYBD6Cy14SVOdMQ9aPoCTcTX2cK3JlCXcavpokLWTZztQw&oe=66C8269A"
            />
          </Tooltip>
          <Tooltip title='nvlthach'>
            <Avatar
              alt="Thạch"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/246656159_1521187224904253_1922719857010921808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHeJY7P8Po2uTyqASfkhF2pUp8i7YFRxJpSnyLtgVHEmqn3MzXQi2blL51aN5TSc_5Sbj4icgM7jrptdphGZ8mL&_nc_ohc=l1Wlc0OE5kUQ7kNvgHbDPgu&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYDO_0hjMztgKUBNduRGSHoQp9YXfNbxFC0J-cKs-Y1PIA&oe=66B51DEF"
            />
          </Tooltip>
          <Tooltip title='ltmduyen'>
            <Avatar
              alt="Duyên"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/448771837_1696224184516116_8215091650578483523_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHEbhNJVtyHmnRZrkcwpZ1TRFghNaER1ThEWCE1oRHVOJiyEcugd9lHNDDEj5MlSkQE3ryEc0bcmTMuxkONNT-H&_nc_ohc=hR9xgZdmpqwQ7kNvgHWD4aI&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYCldWOq7gZKkkqFXzaB03-A9xxuS5Q1ClxVFQzCuI7-XA&oe=66B4FAA7"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>

  )
}

export default BoardBar