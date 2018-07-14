import React, { Component } from 'react';

export default class StoryNavigationButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.direction = props.direction;
    this.pageIdFunc = props.pageIdFunc;
    return ;
  }

  render () {
    return (
      <button>
        { this.direction }
      </button>
    );
  }
}
