import React from 'react';
import { Link } from 'react-router-dom';

const ViewWithOption = ({ text, animation }) => (
  <div>
    { text }
    <Link to='/'>
      Answer A
    </Link>
    <Link to='/'>
      Answer B
    </Link>
    <img src={animation} />
  </div>
);

const ViewWithoutOption = ({ text, animation }) => (
  <div>
    {text}
    <img src={animation} />
  </div>
);

const StoryPageViewer = ({ page }) => (
  page.option.isAvailable ? <ViewWithOption text={page.pageContent} animation={page.pageAnimation}/> : <ViewWithoutOption text={page.pageContent} animation={page.pageAnimation} />
);

export default StoryPageViewer;
