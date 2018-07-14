import { PAGEID_INCREASE, PAGEID_DECREASE } from '../actions/constants';
const page = (state = 1, action) => {
  switch (action.type) {
    case PAGEID_INCREASE:
      return state + 1;

    case PAGEID_DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default page;
