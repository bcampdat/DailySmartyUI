// import { SET_RECENT_POSTS } from "./types";
import axios from "axios";
import { SET_RECENT_RESULTS } from "./types";

export function fetchRecentResults() {
  return function (dispatch) {
    //perform our request in here.
    // console.log("hello from index.actions");
    // https://api.dailysmarty.com/search?q={results}&api_key={key}
    // https://dailysmarty.docs.apiary.io/#reference/0/query-posts/search-for-posts
    // https://api.dailysmarty.com/posts
    // https://swapi.dev/
    // https://api.chucknorris.io/
    axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => {
        console.log("response api", response.data.results);
        dispatch({
          type: SET_RECENT_RESULTS,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.error("Error fetching starships:", error);
      });
  };
}
