import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-component';
import ComicFilterButton from '../../components/ComicFilterButton';
import ComicAutoSuggest from '../../components/ComicAutoSuggest';
import ComicModalDialog from '../../components/ComicModalDialog';
import ComicGridItem from '../../components/ComicGridItem';
import styles from './styles';

class ComicScreen extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      toggle: false
    };
    return ;
  }
  toggleModal = () => {
    if (this.state.toggle == false) {
      this.setState({ toggle: true });
    }
    else {
      this.setState({ toggle: false });
    }
    return ;
  }
  navigateStory = () => {
    alert('navigateStory');
    return ;
  }
  render () {
    return (
      <div className={this._classes.root}>
        <Grid
          container={ true }
          spacing={ 24 }
        >
          <ComicGridItem
            title={ "ComicBook1" }
            image={'https://www.pcgamesn.com/sites/default/files/gabe%20newell%20valve%20pc%20console.jpg'}
            onPress={ this.toggleModal }
          />
          { this.state.toggle == false ? null :
            <ComicModalDialog
              title={ "ComicBook1" }
              description={ "..." }
              onPress={ this.navigateStory }
            />
          }
        </Grid>
      </div>
    );
  }
}

ComicScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComicScreen);
