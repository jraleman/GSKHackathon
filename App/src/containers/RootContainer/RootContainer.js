import React from 'react';
import './styles.css';
import FilterButton from '../../components/FilterButton';
import logo from '../../images/logo.svg';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={'root-container'}>
        <FilterButton />
      </div>
    );
  }
}

export default RootContainer;
