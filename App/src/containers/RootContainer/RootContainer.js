import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import LibraryPageViewer from '../LibraryPageViewer';
import themes from '../../themes';
import './styles.css';
import { Link } from 'react-router-dom';

const logo = require('../../themes/images/logo.svg');

const RootContainer = () => (
  <React.Fragment>
    <MuiThemeProvider theme={themes}>
      <AppHeader
        logo={logo}
        title={'Narwell :: Just a pinch'}
      />
      <CssBaseline />
      <Link to='/story'>
        StoryBook
      </Link>
      <LibraryPageViewer />
      <TabNavbar />
    </MuiThemeProvider>
  </React.Fragment>
);

export default RootContainer;
