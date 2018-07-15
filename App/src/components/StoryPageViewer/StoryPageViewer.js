import React from 'react';

const StoryPageViewer = ({ story }) => (
  <div>
    { `StoryId: ${story.storyId}` }
    <hr />
    { `StoryTitle: ${story.storyTitle}` }
    <hr />
    { `StoryAuthor: ${story.storyAuthor}` }
    <hr />
    { `StoryCover: ${story.storyCover}` }
    <hr />
    { `StoryDescription: ${story.story}` }
    <hr />
    { `Now displaying pageId: ${story.currentPage}` }
  </div>
);

export default StoryPageViewer;
