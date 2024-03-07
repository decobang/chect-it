// This form handles user input. Its where users can enter new tasks and edit any task

import React, { useState } from 'react';

// edits the Form component
import styles from '../styles/Form.module.css';

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if inputValue is empty or only contains whitespace. If it is, return early and don't call addTodo
        if (!inputValue.trim()) { 
            return; 
        }
        addTodo(inputValue);
        setInputValue('');
    };
    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
                <button className={styles.button} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
