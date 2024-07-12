import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentposts";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <h1>DevCamp React Starter</h1> */}
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
