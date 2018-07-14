import React from 'react';
<<<<<<< HEAD
import './styles.css';
=======
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
>>>>>>> origin/jraleman
import Story from '../../components/Story';
import LibraryPageViewer from '../LibraryPageViewer';
import themes from '../../themes';
import './styles.css';

<<<<<<< HEAD
const RootContainer = () => (
  <Story />
);
=======
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
          <LibraryPageViewer />
          <TabNavbar />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
>>>>>>> origin/jraleman

export default RootContainer;
