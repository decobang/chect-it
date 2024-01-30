import React from 'react';
import styles from '../styles/Todo.module.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    const handleCheckboxChange = () => {
        toggleComplete(todo.id);
    };

    const handleDeleteClick = () => {
        deleteTodo(todo.id);
    };

    return (
        <div className={todo.completed ? `${styles.todo} ${styles['todo-completed']}` : styles.todo}>
            <p>{todo.text}</p>
            <div className={styles['buttons-container']}>
           
                <button onClick={handleCheckboxChange}>
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <div className={styles.divider}></div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;