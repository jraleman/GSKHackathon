import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      neutral: '#a7bbc2'
      light: '#55c2bc',
      main: '#22aad0',
      dark: '#094761',
      contrastText: '#fff',
    },
    secondary: {
      neutral: '#c292bb'
      light: '#8e3482',
      main: '#671e5c',
      dark: '#390e34',
      contrastText: '#000',
    },
    contrast: {
      dark: '#121212',
      light: '#f9f9f9'
    }
    success: '#b8e986',
    danger: '#d9534f',
    warning: '#f3bd71',
    info: '#92bced',
  },
});
