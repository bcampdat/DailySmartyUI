import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        {/* <img
          alt="daily smarty ui image logo big"
          src="/assets/ds_circle_logo.png"
        /> */}
        <Link to="/">
          <img
            style={size}
            alt="daily smarty ui image logo big"
            src="/assets/ds_circle_logo.png"
          />
        </Link>
        {/* <img
          style={size}
          alt="daily smarty ui image logo big"
          src="/assets/ds_circle_logo.png"
        /> */}
      </div>
    );
  }
}
