import React from 'react';
import StoryNavigationButton from '../StoryNavigationButton';

const StoryNavigation = ({ pageIdInc, pageIdDec, pageId }) => (
  <div>
    <StoryNavigationButton
      direction='left'
      pageIdFunc={pageIdDec}
      pageId={pageId}
    />
    <StoryNavigationButton
      direction='right'
      pageIdFunc={pageIdInc}
      pageId={pageId}
    />
  </div>
);

export default StoryNavigation;
