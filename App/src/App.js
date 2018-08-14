import React from 'react';
import RootContainer from './containers/RootContainer';
import themes from './themes';
import TabNavbar from './components/TabNavbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <MuiThemeProvider theme={ themes }>
    <CssBaseline />
    <RootContainer />
    <TabNavbar />
  </MuiThemeProvider>
);

export default App;
