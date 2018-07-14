import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import ComicScreen from '../ComicScreen';
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
          <AppHeader title={ "Nawell :: Comic Books" }/>
          <CssBaseline />
          <ComicScreen />
          <TabNavbar />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default RootContainer;
