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
const logoAlt = require('../../themes/images/logo-alt.svg');

// Show / Hide Toogle:
// https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs

class RootContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      childVisible: false
    };
  }
  onClick() {
    this.setState(prevState => (
      { childVisible: !prevState.childVisible }
    ));
  }
  componentDidMount () {
    // this.props.loadStory(Data);
  }
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={themes}>
          <AppHeader
            logo={logoAlt}
            title={'Narwell :: Just a pinch'}
          />
          <CssBaseline />
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
