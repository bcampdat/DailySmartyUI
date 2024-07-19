import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";

// export default class Home extends Component {
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
  handleSearchBarSubmit(query) {
    // console.log('trying to handle submit for query', query);
    this.props.fetchPostsWithQuery(query);
    this.props.history.push("/results");
  }
  render() {
    return (
      <div className="app">
        {/* <h1>DevCamp React Starter</h1> */}
        <Logo />
        <SearchBar
          page="home"
          onSubmit={(query) => this.handleSearchBarSubmit(query)}
        />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
