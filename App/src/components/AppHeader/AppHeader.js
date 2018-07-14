import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this._title = this.props.title;
    this._logo = this.props.logo;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <AppBar
          position={ "static" }
          color={ "default" }
        >
          <Toolbar>
            <img
              src={ this._logo }
              alt={ this._title }
              style={{ width: 'auto', height: 40, paddingRight: 12 }}
            />
            <Typography
              variant={ "title" }
              color={ "inherit" }
            >
              { this._title }
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
