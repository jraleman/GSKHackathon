import React from 'react';
import ComicFilterButton from '../../components/ComicFilterButton';
import ComicAutoSuggest from '../../components/ComicAutoSuggest';
import ComicModalDialog from '../../components/ComicModalDialog';
import ComicGridItem from '../../components/ComicGridItem';
import ComicTabNavbar from '../../components/ComicTabNavbar';
import AppHeader from '../../components/AppHeader';

class ComicScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <div>
          <AppHeader />

          <ComicFilterButton
            text={ "I AM A BUTTON" }
            disable={ false }
            category={ 'option1' }
          />
          <ComicAutoSuggest />
          <ComicModalDialog />
          <ComicGridItem />
          
          <ComicTabNavbar />
        </div>
      </React.Fragment>
    );
  }
}

export default ComicScreen;
