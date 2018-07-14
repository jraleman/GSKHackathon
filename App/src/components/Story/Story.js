import React, { Component } from 'react';
import StoryText from '../StoryText';
import StoryAnimation from '../StoryAnimation';

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
        <StoryText />
        <StoryAnimation />
      </div>
    );
  }
}
