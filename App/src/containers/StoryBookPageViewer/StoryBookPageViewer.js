import React from 'react';

class StoryBookPageViewer extends React.Component {
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
          <p>{ "StoryBookPageViewer" }</p>
        </div>
      </div>
    );
  }
}
