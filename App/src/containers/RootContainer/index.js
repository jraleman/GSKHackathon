import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import LibraryPageViewer from '../LibraryPageViewer';
import themes from '../../themes';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadStory } from '../../actions';
import Data from '../../fixtures';

const logo = require('../../themes/images/logo.svg');

// const RootContainer = ({ loadStory }) => (
//   <React.Fragment>
//     <MuiThemeProvider theme={themes}>
//       <AppHeader
//         logo={logo}
//         title={'Narwell :: Just a pinch'}
//       />
//       <CssBaseline />
//       <Link to='/story'>
//         StoryBook
//       </Link>
//       <LibraryPageViewer />
//       <TabNavbar />
//     </MuiThemeProvider>
//   </React.Fragment>
// );

class RootContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.props.loadStory(Data);
  }
  render () {
    return (
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
  }
}

const mapDispatchToProps = {
  loadStory
};

export default connect(null, mapDispatchToProps)(RootContainer);
