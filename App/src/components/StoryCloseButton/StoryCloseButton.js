import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StoryCloseButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    return (
      <Link to='/'>
        { 'this is the StoryCloseButton Component' }
      </Link>
    );
  }
}
