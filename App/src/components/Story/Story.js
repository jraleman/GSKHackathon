import React, { Component } from 'react';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    return (
      <div>
        { 'This is the Story Component' }
      </div>
    );
  }
}
