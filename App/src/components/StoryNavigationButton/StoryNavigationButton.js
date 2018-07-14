import React, { Component } from 'react';

export default class StoryNavigationButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.direction = props.direction;
    return ;
  }

  render () {
    return (
      <div>
        { `this is the Navigation Button ${this.direction}` }
      </div>
    );
  }
}
