import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    // console.log("trying to handle subimit for query", query);
    // // navegate to a new route.
    // this.props.history.push("/results");
    this.props.onSubmit(query);
  };

  renderInput(field) {
    return (
      <input type="text" placeholder="Search Star Wars" {...field.input} />
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="search-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        {/* <input placeholder="Search DailySmarty"/> */}
        <Field name="query" component={this.renderInput} />
        {/* <p>Press return to search</p> */}
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
