import React from 'react';
import Button from '@material-ui/core/Button';

class FilterButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ 'filter-btn' }>
        <Button
          variant="raised"
          color="primary"
        >
          { "Filter Button" }
        </Button>
      </div>
    );
  }
}

export default FilterButton;
