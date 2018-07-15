import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../../containers/StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPageViewer from '../../containers/StoryPageViewer';
import Data from '../../fixtures';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    console.log(Data);
  }

  render () {
    // will be all of the pages needed to tell the story
    return (
      <Fragment>
        <CssBaseline />
        <StoryCloseButton />
        <StoryPageViewer />
        <StoryNavigation />
      </Fragment>
    );
  }
}
