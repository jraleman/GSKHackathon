import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MainScreen from '../../screens/MainScreen';
import themes from '../../themes';
import './styles.css';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={ themes }>
          <CssBaseline />
          <MainScreen />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default RootContainer;
