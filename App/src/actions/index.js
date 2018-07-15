import { PAGEID_INCREASE, PAGEID_DECREASE, LOAD_STORY, CLOSE_STORY } from './constants';

export const pageIdInc = () => ({
  type: PAGEID_INCREASE
});

export const pageIdDec = () => ({
  type: PAGEID_DECREASE
});

export const loadStory = story => ({
  type: LOAD_STORY,
  payload: story
});

export const closeStory = () => ({
  type: CLOSE_STORY
});
