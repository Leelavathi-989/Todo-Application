import React, { useState, useEffect } from 'react';
import styles from './todoActionTask.module.css';

function TodoAddTaskForm({ onSubmit, initialTodo }) {
  const [todo, setTodo] = useState('');
  const [status, setStatus] = useState('pending');

  // useEffect to update the input field when the initialTodo prop changes
  useEffect(() => {
    setTodo(initialTodo);
  }, [initialTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      onSubmit(todo, status);
      setTodo('');
    }
  };

  // JSX for the TodoAddTaskForm component
  return (
    <div className={styles.addTask}>
      <form className={styles.formContainer}>
        <label htmlFor="todoInput" className={styles.label}>
          Task Name:
        </label>
        <input
          type="text"
          placeholder="Add your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={styles.addTaskInput}
        />

        <label htmlFor="statusDropdown" className={styles.label}>
          Status of your task:
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={styles.statusDropdown}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button className={styles.addTaskButton} onClick={handleSubmit}>
          Ok
        </button>
      </form>
    </div>
  );
}

export default TodoAddTaskForm;
