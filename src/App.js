import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import TodoApp from './todo/todoApp/TodoApplication';


function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo)
  const {todos} = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };


  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  const EditHandler = (t) => {
    console.log('editinggg');
  }

  return (
    <>
    <div className="App">
      <TodoApp/>
    </div>
    </>

  );
}

export default App;
