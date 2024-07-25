import { Box, Button } from '@mui/material'
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
import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'
function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {setAnchorEl(event.currentTarget)}
  const handleClose = () => {setAnchorEl(null)}
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#3498db'),
      width:'100%',
      height: (theme) => theme.trelloCustom.boardContentdHeight,
      display: 'flex',
      padding: '10px 0'
    }}>
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
        {/* Box Column 1 */}
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
            height: COLUMN_HEADER_HEIGHT,
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
          {/* Box Card */}
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            m: '0 5px',
            gap: 1,
            p: '0 5px',
            overflowX:'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentdHeight} - ${theme.spacing(5)} - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIGHT})`
          }}
          >
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://gcs.tripi.vn/public-tripi/tripi-feed/img/476389Cqg/anh-mo-ta.png"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Agatsuma Zenitsu</Typography>
              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
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
        {/* Box Column 2 */}
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
            height: COLUMN_HEADER_HEIGHT,
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
          {/* Box Card */}
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            m: '0 5px',
            gap: 1,
            p: '0 5px',
            overflowX:'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentdHeight} - ${theme.spacing(5)} - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIGHT})`
          }}
          >
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://gcs.tripi.vn/public-tripi/tripi-feed/img/476389Cqg/anh-mo-ta.png"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Agatsuma Zenitsu</Typography>
              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
              overflow:'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kimetsu No Yaiba</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}
export default BoardContent