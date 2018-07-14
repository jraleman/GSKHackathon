import { LOAD_STORY } from '../actions/constants';

const defaultState = {
  storyTitle: '',
  pages: [],
  currentPage: undefined
};

const story = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_STORY:
      return {
        ...state,
        pages: action.payload
      };
    default:
      return state;
  }
};

export default story;
