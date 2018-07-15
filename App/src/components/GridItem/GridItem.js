import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

class GridItem extends React.Component {
  constructor (props) {
    super(props);
    this._title = this.props.title;
    this._author = this.props.author;
    this._classes = this.props.classes;
    this._image = this.props.image;
    this._onPress = this.props.onPress;
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Grid
          item={ true }
          xs={ 12 }
          sm={ 6 }
          md={ 4 }
          onClick={ this._onPress }
        >
          <Paper className={ this._classes.paper }>
            <img
              src={ this._image }
              alt={ this._title }
              style={{ width: '100%' }}
             />
            <Typography
              variant="headline"
              component="h3"
            >
              { this._title }
            </Typography>
            <Typography component="p">
              { this._author }
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

GridItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridItem);
