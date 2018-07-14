import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import MainScreen from '../../screens/MainScreen';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <MainScreen />
      </React.Fragment>
    );
  }
}

export default RootContainer;
