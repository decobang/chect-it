import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo'; // import the Todo component

import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles['App']}>
      <h1>Do It All</h1>
      <div className={styles['main-container']}>
        <Form addTodo={addTodo} />
        <div className={styles['todos-container']}>
          <div className={styles['todo-container']}>
            {todos.filter(todo => !todo.completed).map(todo => (
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
          </div>
          <div className={styles['completed-container']}>
            {todos.filter(todo => todo.completed).map(todo => (
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;