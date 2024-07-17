import React, { Component } from "react";

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
        <img
          style={size}
          alt="daily smarty ui image logo big"
          src="/assets/ds_circle_logo.png"
        />
      </div>
    );
  }
}
