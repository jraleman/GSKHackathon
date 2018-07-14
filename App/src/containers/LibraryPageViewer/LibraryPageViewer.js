import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-component';
import FilterButton from '../../components/FilterButton';
import AutoSuggest from '../../components/AutoSuggest';
import ModalDialog from '../../components/ModalDialog';
import GridItem from '../../components/GridItem';
import styles from './styles';

class LibraryPageViewer extends React.Component {
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
          <GridItem
            title={ "ComicBook1" }
            image={'https://www.pcgamesn.com/sites/default/files/gabe%20newell%20valve%20pc%20console.jpg'}
            onPress={ this.toggleModal }
          />
          { this.state.toggle == false ? null :
            <ModalDialog
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

LibraryPageViewer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryPageViewer);
