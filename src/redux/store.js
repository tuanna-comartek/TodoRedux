import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
