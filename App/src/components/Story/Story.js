import React, { Component } from 'react';
import StoryText from '../StoryText';
import StoryAnimation from '../StoryAnimation';
import StoryNavigation from '../StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';

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
        <StoryCloseButton />
        <StoryText />
        <StoryAnimation />
        <StoryNavigation />
      </div>
    );
  }
}
