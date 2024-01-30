import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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