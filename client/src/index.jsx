import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./style.css";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("david")
);
