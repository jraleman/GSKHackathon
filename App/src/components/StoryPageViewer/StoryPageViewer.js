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
    <hr />
    <p>
      { story.storyPages[0].pageContent }
    </p>
    <hr />
    <img src={story.storyPages[0].pageAnimation} />
  </div>
);

export default StoryPageViewer;
