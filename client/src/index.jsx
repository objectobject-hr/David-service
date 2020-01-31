import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./style.css";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("david")
);
