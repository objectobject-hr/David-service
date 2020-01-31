import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

export default configureStore = () => {
  return createStore(rootReducers, applyMiddleware(thunk));
};
