import React, { Component } from "react";

import { connect } from "react-redux";

import Post from './post';

class ResultsPosts extends Component {
    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post type="result" key={index} {...post}/>
        })
        return posts;
    }


  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">
            {this.renderPosts()}
            {/* RESULTS GO HERE "PERSONAJES DE LA GUERRA DE LAS GALAXIAS" */}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //   return { state };
  return {
    posts: state.posts.resultsPosts,
  };
}

export default connect(mapStateToProps)(ResultsPosts);
