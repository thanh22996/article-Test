import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/intro.css";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./configs/store/store.config";

import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
