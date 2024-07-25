import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`
const theme = extendTheme({
  trelloCustom:{
    appBarHeigth: APP_BAR_HEIGHT,
    boardBardHeight: BOARD_BAR_HEIGHT,
    boardContentdHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius:'10px'
          },
          '*::-webkit-scrollbar-thumb: hover': {
            backgroundColor: '#ecf0f1',
            borderRadius:'10px'
          },
          '*::-webkit-scrollbar-track': { margin: 16 }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth:'0.5px',
          '&hover': { borderWidth: '1px' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:{
          fontSize: '0.9rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1.5px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1.5px !important' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root:{
          fontSize: '0.9rem'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root:{
          '&.MuiTyography-body1': { fontSize: '0.875rem' }
        }
      }
    }
  }
})
export default theme