import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../../containers/StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPageViewer from '../../containers/StoryPageViewer';

const Story = ({ story }) => (
  <Fragment>
    <CssBaseline />
    <StoryCloseButton />
    <StoryPageViewer page={story.storyPages.find(page => page.pageId == story.currentPage)}
    />
    <StoryNavigation />
  </Fragment>
);

export default Story;
