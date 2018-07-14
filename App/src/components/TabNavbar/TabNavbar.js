import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    );
  }
}

TabNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabNavbar);
