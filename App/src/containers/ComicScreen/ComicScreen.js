import React from 'react';
import ComicFilterButton from '../../components/ComicFilterButton';
import ComicAutoSuggest from '../../components/ComicAutoSuggest';
import ComicModalDialog from '../../components/ComicModalDialog';

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
        </div>
      </React.Fragment>
    );
  }
}

export default ComicScreen;
