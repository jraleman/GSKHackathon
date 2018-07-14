import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../../containers/StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPageViewer from '../../containers/StoryPageViewer';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageId: 1
    };
  }

  render () {
    // will be all of the pages needed to tell the story
    return (
      <Fragment>
        <CssBaseline />
        {/* this redirects back to the library view */}
        <StoryCloseButton />
        <StoryPageViewer />
        {/* <StoryPage /> */}
        <StoryNavigation />
      </Fragment>
    );
  }
}
