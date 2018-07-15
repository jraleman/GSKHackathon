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
      <div className={ this._classes.root }>
        <div style={{
            marginBottom: 12,
            marginTop: 12
          }}
        >
          <AutoSuggest
            placeholder={ "Search a story book..." }
            data={ storiesList }
          />
        </div>
        <div style={{
            marginBottom: 12,
            marginTop: 12
          }}
        >
          <FilterButton
            text={ "Dotis Innis" }
          />
          <FilterButton
            text={ "Vitium Motus" }
          />
          <FilterButton
            text={ "Crafectio Ambuplexia" }
          />
          <FilterButton
            text={ "Inteslor Maracinoma" }
          />
          <FilterButton
            text={ "Accessio Verminosa" }
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
                  image={ storiesList[i].cover }
                  onPress={ () => this.toggleModal(i) }
                 />
                 { this.state.toggle[i] == false ? null :
                    <ModalDialog
                      title={ storiesList[i].title }
                      description={ storiesList[i].description }
                      cover={ storiesList[i].cover }
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
