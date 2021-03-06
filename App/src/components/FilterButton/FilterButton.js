import React from 'react';
import Button from '@material-ui/core/Button';

class FilterButton extends React.Component {
  constructor (props) {
    super(props);
    this._text = this.props.text;
    this._category = this.props.category;
    this._disable = this.props.disable;
    return ;
  }
  render () {
    const rootClasses = `filter-btn ${ this._category }`;
    return (
      <div
        className={ rootClasses }
        style={{
          display: 'inline',
          paddingRight: 6,
        }}
      >
        <Button
          color={ 'primary' }
          disable={ this._disable }
          disableFocusRipple={ false }
          disableRipple={ false }
          fullWidth={ false }
          size={ 'medium '}
          variant={ 'outlined' }
        >
          { this._text }
        </Button>
      </div>
    );
  }
}

export default FilterButton;
