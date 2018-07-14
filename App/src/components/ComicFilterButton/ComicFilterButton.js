import React from 'react';
import Button from '@material-ui/core/Button';

class ComicFilterButton extends React.Component {
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
      <div className={ rootClasses }>
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

export default ComicFilterButton;
