// TodoReducer
export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { todos: state.todos.filter((t) => t.id !== action.payload.id) };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload.updatedTodo } : t
        ),
      };
    default:
      return state;
  }
};
