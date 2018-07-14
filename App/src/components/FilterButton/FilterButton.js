import React from 'react';
import Button from '@material-ui/core/Button';

class FilterButton extends React.Component {
  constructor (props) {
    super(props);
    this._text = this.props.text;
    this._category = this.props.category;
    this.state = {};
    return ;
  }
  render () {
    const rootClasses = `filter-btn ${ this._category }`;
    return (
      <div className={ rootClasses }>
        <Button
          variant="raised"
          color="primary"
        >
          { this._text }
        </Button>
      </div>
    );
  }
}

export default FilterButton;
