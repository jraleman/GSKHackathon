import React, { Component } from 'react';
import StoryNavigationButton from '../StoryNavigationButton';

export default class StoryNavigation extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    return (
      <div>
        <StoryNavigationButton
          direction='left'
          pageIdFunc={this.props.pageIdDec}
        />
        <StoryNavigationButton
          direction='right'
          pageIdFunc={this.props.pageIdInc}
        />
      </div>
    );
  }
}
