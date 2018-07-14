import React, { Component } from 'react';
import StoryText from '../StoryText';
import StoryAnimation from '../StoryAnimation';

export default class StoryPage extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    const storyText = 'This is the text being passed to the StoryText Component';
    return (
      <div>
        <StoryText text={storyText} />
        <StoryAnimation />
      </div>
    );
  }
}
