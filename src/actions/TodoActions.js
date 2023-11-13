export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.id === todo.id);

  if (!hasTodo && todo.text !== '') {
    dispatch({
      type: "ADD_TODO",
      payload: todo, // Assuming `todo` is an object with { id, text }
    });
  }
};

  
 
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
  
    dispatch({
      type: "REMOVE_TODO",
      payload: todo,
    });
  };

// EditTodoAction
export const EditTodoAction = (editedTask, updatedTodo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const updatedTodos = todos.map((t) => (t.id === editedTask.id ? { ...t, ...updatedTodo } : t));

  dispatch({
    type: "EDIT_TODO",
    payload: { id: editedTask.id, updatedTodo: { ...updatedTodo } },
  });
};

  
  
  
  
  
  