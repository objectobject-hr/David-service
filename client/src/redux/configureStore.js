import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

const configureStore = () => {
  return createStore(rootReducers, applyMiddleware(thunk));
};

export default configureStore;
