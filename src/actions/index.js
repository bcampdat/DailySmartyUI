// import { SET_RECENT_POSTS } from "./types";
import axios from "axios";
import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

export function fetchRecentPosts() {
  return function (dispatch) {
    //perform our request in here.
    // console.log("hello from index.actions");
    // https://api.dailysmarty.com/search?q={results}&api_key={key}
    // https://dailysmarty.docs.apiary.io/#reference/0/query-posts/search-for-posts
    // https://api.dailysmarty.com/posts
    // https://swapi.dev/
    // https://swapi.dev/api/starships/
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        // console.log("response api", response.data.results);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.error("Error api RECENT get:", error);
      });
  };
}

export function fetchPostsWithQuery(query) {
  return function(dispatch) {
      axios.get(`https://swapi.dev/api/people/?search=${query}`)
          .then(response => {
              // console.log(response.data.results);
              dispatch({
                  type: SET_RESULTS_POSTS,
                  payload: response.data.results
              });
          })
          .catch(error => {
              console.error("Error api  RESULTS get:", error);
          });
  }
}
