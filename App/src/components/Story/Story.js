import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../../containers/StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPageViewer from '../../containers/StoryPageViewer';
import { Redirect } from 'react-router-dom';

const Story = ({ story }) => (
  story.storyPages.length ? (
  <Fragment>
    <CssBaseline />
    <StoryCloseButton />
    <StoryPageViewer page={story.storyPages.find(page => page.pageId == story.currentPage)}
    />
    <StoryNavigation />
  </Fragment>) : <Redirect to='/' />
);

export default Story;
