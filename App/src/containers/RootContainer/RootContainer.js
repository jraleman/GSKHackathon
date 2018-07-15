import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import themes from '../../themes';
import './styles.css';
import { Link } from 'react-router-dom';

const logoAlt = require('../../themes/images/logo-alt.svg');
const linkNavigation = {
  landing: '/library',
  body: '/story',
  about: '/info'
}

const RootContainer = () => (
  <React.Fragment>
    <MuiThemeProvider theme={ themes }>
      <AppHeader
        logo={ logoAlt }
        title={ 'Narwell :: Just a pinch' }
      />
      <CssBaseline />
      {/* <Link to='/story'> */}
      <Link to={ linkNavigation } >
        StoryBook
      </Link>
      <InfoPageViewer />
      <TabNavbar />
    </MuiThemeProvider>
  </React.Fragment>
);

export default RootContainer;
