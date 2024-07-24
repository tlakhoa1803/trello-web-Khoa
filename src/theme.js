import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = extendTheme({
  trelloCustom:{
    appBarHeigth: '58px',
    boardBardHeight: '64px'
  },
  colorSchemes: {
  //   light: {},
  //   dark: {}
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
          }
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
    }
  }
})
export default theme