import React from 'react';
import styles from './styles';

class InfoPageViewer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <div style={{ textAlign: 'center' }}>
          <p>{ "InfoPageViewer" }</p>
        </div>
      </div>
    );
  }
}

export default InfoPageViewer;
