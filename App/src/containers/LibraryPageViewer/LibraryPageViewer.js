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

// Emulate JSON response
import storiesList from '../../fixtures/stories';
/*
  storyId
  title
  author
  cover
  description
*/

class LibraryPageViewer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      storiesCount: storiesList.length,
      toggle: []
    };
    // don't judge!!!
    // creates X amount of 'bool' elements inside
    // the toggle array
    // ugly, but it works!
    this.state.toggle = new Array(this.state.storiesCount);
    this.state.toggle.fill(false);
    return ;
  }
  // ugly, but works!
  // source: https://stackoverflow.com/a/29537485
  toggleModal = (i) => {
    if (this.state.toggle[i] == false) {
      this.state.toggle[i] = true;
      this.forceUpdate()
    }
    else if (this.state.toggle[i] == true) {
      this.state.toggle[i] = false;
      this.forceUpdate()
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
        <AutoSuggest />
        <div style={{ display: 'inline-block' }}>
          <FilterButton
            text={ "Virus1" }
          />
          <FilterButton
            text={ "Virus2" }
          />
          <FilterButton
            text={ "Virus3" }
          />
        </div>
        <Grid
          container={ true }
          spacing={ 24 }
        >
        {/* Render story items in a map */}
        { Array.apply(null, Array(this.state.storiesCount)).map(
           function(item, i) {
             return (
               <React.Fragment>
                 <GridItem
                  key={ i }
                  title={ storiesList[i].title }
                  image={'https://www.pcgamesn.com/sites/default/files/gabe%20newell%20valve%20pc%20console.jpg'}
                  onPress={ () => this.toggleModal(i) }
                 />
                 { this.state.toggle[i] == false ? null :
                    <ModalDialog
                      title={ storiesList[i].title }
                      description={ storiesList[i].description }
                      cover={ 'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2016/02/gabe-newell-1-1021x580.jpg' }
                      onPress={ this.navigateStory }
                    />
                 }
               </React.Fragment>
             );
        }, this)}
        </Grid>
      </div>
    );
  }
}

LibraryPageViewer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryPageViewer);
