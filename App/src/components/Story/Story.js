import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../../containers/StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPageViewer from '../../containers/StoryPageViewer';
import { Redirect, Route } from 'react-router-dom';

const Story = ({ story }) => (
  story.storyPages.length ? (
    <Fragment>
      <CssBaseline />
      <StoryCloseButton />
      <StoryPageViewer page={story.storyPages
        .find(page => page.pageId === story.currentPage)}
      />
      {/* <Route
        path='/story/page/:pageId'
        component={StoryPageViewerWrapper}
      /> */}
      <StoryNavigation />
    </Fragment>) : <Redirect to='/' />
);

// const StoryPageViewerWrapper = ({ match }) => (
//   <StoryPageViewer page={}
// )

export default Story;
