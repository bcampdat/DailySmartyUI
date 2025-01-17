import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { thunk } from "redux-thunk";
import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const createStoreWithMiddleware = applyMiddleware(thunk)(
//   compose(
//     (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
//       createStore
//     )
//   )
// );

const createStoreWithMiddleware = applyMiddleware(thunk)(
  compose(
    (window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f)(createStore)
  )
);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";
import Home from "./components/home";
import Results from "./components/results";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
