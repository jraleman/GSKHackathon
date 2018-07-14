import { PAGEID_INCREASE, PAGEID_DECREASE, LOAD_STORY, CLOSE_STORY } from './constants';

export const pageIdInc = () => ({
  type: PAGEID_INCREASE
});

export const pageIdDec = () => ({
  type: PAGEID_DECREASE
});

export const loadStory = pages => ({
  type: LOAD_STORY,
  payload: pages
});

export const closeStory = () => ({
  type: CLOSE_STORY
});
