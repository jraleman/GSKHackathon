import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryNavigation from '../StoryNavigation';
import StoryCloseButton from '../StoryCloseButton';
import StoryPage from '../StoryPage';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    return (
      <Fragment>
        <CssBaseline />
        <StoryCloseButton />
        <StoryPage />
        <StoryNavigation />
      </Fragment>
    );
  }
}
