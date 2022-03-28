export const addTodo = (data) => {
  return {
    type: "todoList/AddTodo",
    payload: data,
  };
};

export const searchFilter = (text) => {
  return {
    type: "todoList/SearchFilter",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "todoList/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "todoList/priorityFilterChange",
    payload: priorities,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: "todoList/ToggleTodo",
    payload: todoId,
  };
};
