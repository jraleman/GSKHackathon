import React, { Component } from 'react';

export default class StoryText extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.text = this.props.text;
    return ;
  }

  render () {
    return (
      <div>
        { this.text ? this.text : 'This is placeholder text'}
      </div>
    );
  }
}