import { SET_RECENT_RESULTS } from "../actions/types";

const INIT_STATE = {
  posts: [],
  recentResults: [],
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SET_RECENT_RESULTS:
        // return [...state, recentPosts, action.payload]
        return [...state.recentResults, action.payload];
    default:
      return state;
  }
}
