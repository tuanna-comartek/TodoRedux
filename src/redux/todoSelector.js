import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//   const listFilter = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return listFilter;
// };

// export const searchSelector = (state) => state.filters.search;

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusFilterSelector = (state) => state.filters.status;
// export const statusFilterPriority = (state) => state.filters.priorities;

export const renamingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
