import React from 'react';
import ComicFilterButton from '../../components/ComicFilterButton';
import ComicAutoSuggest from '../../components/ComicAutoSuggest';
import ComicModalDialog from '../../components/ComicModalDialog';
import ComicGridItem from '../../components/ComicGridItem';

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

          <ComicFilterButton
            text={ "I AM A BUTTON" }
            disable={ false }
            category={ 'option1' }
          />
          <ComicAutoSuggest />
          <ComicModalDialog />
          <ComicGridItem />

        </div>
      </React.Fragment>
    );
  }
}

export default ComicScreen;
