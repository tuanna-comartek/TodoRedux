const initialState = [
  { id: 1, name: "Ăn thịt chó", completed: true, priority: "Medium" },
  { id: 2, name: "Ăn thịt bò", completed: false, priority: "Medium" },
  { id: 3, name: "Ăn thịt lợn", completed: true, priority: "High" },
];

const todoSliceReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/AddTodo":
      return [...state, action.payload];
    case "todoList/ToggleTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoSliceReducer;
