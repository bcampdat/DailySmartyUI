import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from './searchbar';

import { connect } from 'react-redux';
import * as actions from '../actions';

import ResultsPosts from './resultPosts';

class Results extends Component {
  handleSearchBarSubmit(query) {
    // console.log(query);
    this.props.fetchPostsWithQuery(query);
  }
  render() {
    return (
      <div>
        {/* <h1>Results</h1>
        <Logo /> */}
        <Logo size={55}/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <ResultsPosts/>
      </div>
    );
  }
}
// export default Results;
export default connect(null, actions)(Results);
