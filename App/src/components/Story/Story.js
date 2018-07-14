import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPage from '../StoryPage';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageId: 1
    };
    return ;
  }

  render () {
    // will be all of the pages needed to tell the story
    const pages = [];
    return (
      <Fragment>
        <CssBaseline />
        {/* this redirects back to the library view */}
        <StoryCloseButton />
        <PageViewer pageId={1} pages={pages} />
        {/* <StoryPage /> */}
        <StoryNavigation />
      </Fragment>
    );
  }
}

class PageViewer extends Component {
  constructor (props) {
    super(props);
    this.pages = this.props.pages;
    this.pageId = this.props.pageId;
    this.state = {};
    return ;
  }

  render () {
    const pageId = this.props.pageId ? this.props.pageId : 'failed to load page id';
    return (
      <div>
        { `Now displaying pageId: ${pageId}` }
      </div>
    );
  }
}