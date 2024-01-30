import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) { // Check if inputValue is empty or only contains whitespace
            return; // If it is, return early and don't call addTodo
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