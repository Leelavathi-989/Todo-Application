// TodoApplication component
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, EditTodoAction, RemoveTodoAction } from '../../actions/TodoActions';
import styles from './todoAction.module.css';
import TodoAddTaskForm from '../todoform/TodoAddTaskForm';

function TodoApplication() {
  const [formVisible, setFormVisible] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  // Function to toggle the visibility of the add task form
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    setEditTask(null); 
  };

  // Function to handle form submission (add or edit task)
  const handleSubmit = (todo, status) => {
    if (editTask) {
      dispatch(EditTodoAction(editTask, { text: todo, status }));
    } else {
      dispatch(AddTodoAction({ id: Date.now(), text: todo, status }));
    }
    toggleFormVisibility(); 
  };

  // Function to handle task deletion
  const handleDelete = (task) => {
    dispatch(RemoveTodoAction(task));
  };

  // Function to handle task editing
  const handleEdit = (task) => {
    setFormVisible(true); 
    setEditTask({ ...task }); 
  };

  // JSX for the TodoApplication component
  return (
    <div className={styles.app}>
      <header className={styles.AppHeader}>
        {/* Application heading */}
        <h2 className={styles.heading}>Todo List App</h2>

        <button className={styles.addYourTask} onClick={toggleFormVisibility}>
          Add Your Task
        </button>

        {formVisible && <TodoAddTaskForm onSubmit={handleSubmit} initialTodo={editTask?.text || ''} />}

        {/* List of all todos */}
        <ul className={styles.allTodos}>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className={styles.singleTodo}>
                <span className={styles.todoText}>{t.text}</span>
                <div className={styles.changeAction}>
                  {/* Display the status of the task */}
                  <div className={t.status === 'pending' ? styles.pending : styles.completed}>{t.status}</div>
                  <button className={styles.deleteButton} onClick={() => handleDelete(t)}>
                    Delete
                  </button>

                  <button className={styles.editButton} onClick={() => handleEdit(t)}>
                    Edit
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default TodoApplication;
