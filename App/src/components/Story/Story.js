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

  // these can be actions when redux gets introduces
  pageIdInc(pageId) {
    return pageId + 1;
  }

  pageIdDec(pageId) {
    return pageId - 1;
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
        <StoryNavigation pageIdInc={this.pageIdInc} pageIdDec={this.pageIdDec} />
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
        {/* This must be replaced with a method that handles printing all the content from a page object */}
        { `Now displaying pageId: ${pageId}` }
      </div>
    );
  }
}