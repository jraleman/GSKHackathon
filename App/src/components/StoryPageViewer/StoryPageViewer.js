import React from 'react';

const StoryPageViewer = ({ story }) => (
  <div>
    { `Now displaying pageId: ${story.currentPage}` }
  </div>
);

export default StoryPageViewer;
