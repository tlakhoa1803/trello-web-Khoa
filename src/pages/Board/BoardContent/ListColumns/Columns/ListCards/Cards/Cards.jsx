import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
function Cards({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow:'0 1px 1px rgb(0,0,0,0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Kimetsu No Yaiba</Typography>
        </CardContent>
      </Card>
    )
  }
  return (
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
  )
}

export default Cards