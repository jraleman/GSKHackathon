import React from 'react';
import { Link } from 'react-router-dom';

const ViewWithOption = ({ text, animation, option, clickHandle }) => (
  <div>
    { text }
    <button onClick={() => clickHandle(option.route_a)}>Choice A</button>
    <button onClick={() => clickHandle(option.route_b)}>Choice B</button>
    <img src={animation} />
  </div>
);

const ViewWithoutOption = ({ text, animation }) => (
  <div>
    {text}
    <img src={animation} />
  </div>
);

const StoryPageViewer = ({ page, moveToPage }) => (
  page.option.isAvailable ? 
    <ViewWithOption text={page.pageContent}
      animation={page.pageAnimation}
      clickHandle={moveToPage}
      option={page.option}
    /> 
    :
    <ViewWithoutOption text={page.pageContent} animation={page.pageAnimation}
      clickHandle={moveToPage}
    />
);

export default StoryPageViewer;
