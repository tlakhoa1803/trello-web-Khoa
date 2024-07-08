import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, orange, cyan } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: orange,
        secondary: cyan
      }
    }
  }
})
export default theme