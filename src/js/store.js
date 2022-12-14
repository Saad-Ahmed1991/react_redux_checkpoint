import { createStore } from "redux";
import { tasksReducer } from "./reducers/reducers";
export const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
