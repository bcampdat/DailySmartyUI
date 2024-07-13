import { SET_RECENT_POSTS } from "./types";
import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    //perform our request in here.
    // console.log("hello from index.actions");
    axios.get("https://api.dailysmarty.com/posts").then((response) => {
      console.log(response.data.posts);
      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.posts,
      });
    });
  };
}
