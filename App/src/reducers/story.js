import { LOAD_STORY } from '../actions/constants';

const defaultState = {
  storyId: '',
  storyTitle: '',
  storyAuthor: '',
  storyCover: '',
  storyDescription: '',
  storyPages: [],
  currentPage: 1
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
    default:
      return state;
  }
};

export default story;
