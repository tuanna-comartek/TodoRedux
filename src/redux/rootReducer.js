import { combineReducers } from "redux";

import filterSliceReducer from "../components/Filters/FilterSliceReducer";
import todoSliceReducer from "../components/TodoList/TodoSliceReducer";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterSliceReducer(state.filters, action),
//     todoList: todoSliceReducer(state.todoList, action),
//   };
// };
// export default rootReducer;

const rootReducer = combineReducers({
  filters: filterSliceReducer,
  todoList: todoSliceReducer,
});
export default rootReducer;
