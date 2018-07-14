import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    const storyText = 'This is the text being passed to the StoryText Component';
    return (
      <Fragment>
        <CssBaseline />
        <StoryCloseButton />
        <StoryText text={storyText} />
        <StoryAnimation />
        <StoryNavigation />
      </Fragment>
    );
  }
}
