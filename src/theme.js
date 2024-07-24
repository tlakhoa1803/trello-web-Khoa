import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, orange, cyan } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trelloCustom:{
    appBarHeigth: '58px',
    boardBardHeight: '64px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
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
            backgroundColor: '#1abc9c',
            borderRadius:'10px'
          },
          '*::-webkit-scrollbar-thumb: hover': {
            backgroundColor: '#16a085',
            borderRadius:'10px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.9rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.light
            }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.9rem'
        })
      }
    }
  }
})
export default theme