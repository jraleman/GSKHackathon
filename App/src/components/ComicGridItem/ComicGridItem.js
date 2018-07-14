import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

class ComicGridItem extends React.Component {
  constructor (props) {
    super(props);
    this._title = this.props.title;
    this._description = this.props.description;
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
            <Typography
              variant="headline"
              component="h3"
            >
              { this._title }
            </Typography>
            <img
              src={ this._image }
              alt={ this._title }
              style={{ width: '100%' }}
             />
            <Typography component="p">
              { this._description }
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

ComicGridItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComicGridItem);
