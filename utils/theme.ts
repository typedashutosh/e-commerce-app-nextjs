import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        color: 'white'
      }
    }
  }
})

export default theme
