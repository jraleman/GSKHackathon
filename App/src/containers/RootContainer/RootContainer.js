import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import Story from '../../components/Story';
import LibraryPageViewer from '../LibraryPageViewer';
import themes from '../../themes';
import './styles.css';

const logo = require("../../themes/images/logo.svg")

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
          <AppHeader
            logo={ logo }
            title={ "Narwell :: Just a pinch" }
          />
          <CssBaseline />
          <LibraryPageViewer />
          <TabNavbar />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default RootContainer;
