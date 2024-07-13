import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    console.log("trying to handle subimit for query", query);
    // navegate to a new route.
  };

  renderInput(field) {
    return (
      <input type="text" placeholder="Search DailySmarty" {...field.input} />
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
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

export default SearchBar;
