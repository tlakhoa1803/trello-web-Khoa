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

const BoardBarMenuStyle = {
  color:'white', backgroundColor:'transparent', border: 'none', paddingX: '2px', borderRadius:'4px',
  '.MuiSvgIcon-root': {
    color:'white'
  },
  '&:hover':{
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50': '#2980b9')
  }
}
function BoardBar() {
  return (
    <Box px={ 2 } sx={{
      width:'100%',
      height: (theme) => theme.trelloCustom.boardBardHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={BoardBarMenuStyle}
          icon={<DashboardIcon />}
          label="Olezeyu Dev"
          onClick={() => {}}
        />
        <Chip
          sx={BoardBarMenuStyle}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
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
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/356623904_631631788904066_1139081624838397631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFeunWmHcLTyOPi9G20xGVoiH0BQMNFw5SIfQFAw0XDlNbOHALxry6zSGiC5nz2Ubee5CHkZZTPPTQKRqNUvxZx&_nc_ohc=9zrw2vyhZR4Q7kNvgHQ0XSS&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYCYfntpRimq_KmlMDoFg2CS1NUaCzKPKXzW5PcHNT5hEQ&oe=66A68954"
            />
          </Tooltip>
          <Tooltip title='pcphat'>
            <Avatar
              alt="Phát"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF65pVUmfbTPVVC5WuqHT3tVDhSdZO_1-5UOFJ1k7_X7rUMu-KfAtT6m-IGP8cQmw86cQW8EzuB-B7lqqZQZ1b9&_nc_ohc=iVzOJoiOAn0Q7kNvgGRaJAm&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYBL1KkgJ09yYzxDv1YlzwOAwCbGTw61rX2c0-8kCzNv-Q&oe=66A663DA"
            />
          </Tooltip>
          <Tooltip title='ddchi'>
            <Avatar
              alt="Chí"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-1/428619988_406911642015059_6386687504451756359_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHpG7d9dzb3EDQl8D86QedGmYbpnVdTGpKZhumdV1MakjQwDSIXhZvrsghvTsuAUZz-iXnx3nxjYS-BBczDSaCl&_nc_ohc=5KWG0luZYeQQ7kNvgEOxyly&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYAjgPUIDJTRsBb-sB2_F76HctMl425z8L9ZZyRVpi_srw&oe=66A660E6"
            />
          </Tooltip>
          <Tooltip title='nntmy'>
            <Avatar
              alt="My"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-1/277471722_367399241957183_2399472339863145818_n.jpg?stp=c0.64.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGC-Tw3KCuHuQsX-2hLqRV5CKHmpEIrZIEIoeakQitkgdsEwGOejinnHFJfbc-FF0w0ny5P3rVnPLGrg_8U9c5u&_nc_ohc=YzmqGXJrvbMQ7kNvgFVGyT0&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYB6fhDtRQPxi8Qhe-14-DpFeu3YxCktOyXkKIa89-q7JA&oe=66A68DAD"
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
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-1/444503624_2150018032021166_1073095174842497195_n.jpg?stp=c0.0.200.200a_cp6_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF8napXjfMYnvpx3NR_ZV-EfmgtF4rlXcV-aC0XiuVdxZeOOIvO3KfI2mXYkRs92AmVo8g59WbHfX_1QjN5HBCF&_nc_ohc=cs3wavlQjMAQ7kNvgFDe1Ky&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYDsvEafYSDGLvHFzxn3mwgmv3NE-RiiLAH4eWNpPR2Qow&oe=66A65C24"
            />
          </Tooltip>
          <Tooltip title='ntnbich'>
            <Avatar
              alt="Bích"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-1/442480187_1498550774433191_8353995210842339161_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF1-ORe_Q5v4-jgK2_zOHr0FYFprviTF2gVgWmu-JMXaKhmaGoE1pyy0_ojJLANhZCvR9MEEUgsi3rfrnJMwLkw&_nc_ohc=u51gvCrt-7AQ7kNvgFBbUqc&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYC2YZcQ1YxunMQr28fpBx0-2zJCYnE1JRwo3478kfpsag&oe=66A68359"
            />
          </Tooltip>
          <Tooltip title='ltmduyen'>
            <Avatar
              alt="Duyên"
              src="https://scontent.fsgn22-1.fna.fbcdn.net/v/t39.30808-6/448771837_1696224184516116_8215091650578483523_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHEbhNJVtyHmnRZrkcwpZ1TRFghNaER1ThEWCE1oRHVOJiyEcugd9lHNDDEj5MlSkQE3ryEc0bcmTMuxkONNT-H&_nc_ohc=S-hSba-YHTMQ7kNvgGOAnuh&_nc_ht=scontent.fsgn22-1.fna&oh=00_AYDCPjiIojE6ZonnUNPo7cQ23whLkwKuD4z7rR64QF2Pgw&oe=66A67A27"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>

  )
}

export default BoardBar