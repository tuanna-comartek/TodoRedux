const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterSliceReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/SearchFilter":
      return {
        ...state,
        search: action.payload,
      };
    case "todoList/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "todoList/priorityFilterChange":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};
export default filterSliceReducer;
