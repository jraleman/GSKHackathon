import React from 'react';
import FilterButton from '../../components/FilterButton';

class MainScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <div id={ 'MainScreen' }>
        <FilterButton
          text={ "I AM A BUTTON" }
          disable={ false }
          category={ 'option1' }
        />
      </div>
    );
  }
}

export default MainScreen;
