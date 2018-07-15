import { PAGEID_INCREASE, PAGEID_DECREASE, LOAD_STORY } from '../actions/constants';

const defaultState = {
  storyId: '',
  storyTitle: '',
  storyAuthor: '',
  storyCover: '',
  storyDescription: '',
  storyPages: [],
  currentPage: 1
};

const pageIdIncrease = (state, action) => {
  const increaseBy = (state.currentPage + 1 > state.storyPages.length) ? 0 : 1;
  return {
    ...state,
    currentPage: state.currentPage + increaseBy
  };
};

const pageIdDecrease = (state, action) => {
  const decreaseBy = (state.currentPage - 1 < 1) ? 0 : 1;
  return {
    ...state,
    currentPage: state.currentPage - decreaseBy
  };
};

const story = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_STORY:
      return {
        ...state,
        storyId: action.payload.storyId,
        storyTitle: action.payload.title,
        storyAuthor: action.payload.author,
        storyCover: action.payload.cover,
        storyDescription: action.payload.description,
        storyPages: action.payload.pageList
      };
    case PAGEID_INCREASE:
      return pageIdIncrease(state, action);
    case PAGEID_DECREASE:
      return pageIdDecrease(state, action);
    default:
      return state;
  }
};

export default story;
