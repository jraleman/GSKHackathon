import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import styles from './styles';


class TabNavbar extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      value: 0
    };
    return ;
  }
  handleChange = (event, value) => {
    this.setState({ value });
    return ;
  };
  render () {
    return (
      <BottomNavigation
        value={ this.state.value }
        onChange={ this.handleChange }
        showLabels={ true }
        className={ this._classes.root }
      >
        <BottomNavigationAction
          disabled={ false }
          label="Library"
          icon={ <AppsIcon /> }
        />
        <BottomNavigationAction
          disabled={ true }
          label="StoryBook"
          icon={ <ChromeReaderModeIcon /> }
        />
        <BottomNavigationAction
          disabled={ false }
          label="Info"
          icon={ <InfoIcon /> }
        />
      </BottomNavigation>
    );
  }
}

TabNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabNavbar);
