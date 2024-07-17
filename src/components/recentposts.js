import React, { Component } from "react";
import {connect} from "react-redux";

import * as actions from '../actions';

import Post from './post';

class RecentPosts extends Component {

  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  renderPosts = function() {
    const posts = this.props.recentPosts.map((results, index) => {
        if(index < 3) {
            return (
                // <li key={index}>
                //     {results.name}
                //     {/* {post.title}    con la api dealy smarty */}
                // </li>
                <Post {...results} key={index}/>
            )   
        }
    })
    return posts
}
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">
            {/* <li>recent post 0</li>
            <li>recent post 1</li>
            <li>recent post 2</li> */}
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

// export default connect(null, actions)(RecentPosts);
function mapStateToProps(state) {
  return {
      recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPosts);
