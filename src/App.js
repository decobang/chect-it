import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['App']}>
      <h1>Do It All</h1>
      <div className={styles['main-container']}>
        <p>This is the Iput Field</p>
        <div className={styles['todos-container']}>
         <div className={styles['todo-container']}>Todo Container</div>
          <div className={styles['completed-container']}>Completed Container</div>
        </div>
        </div>
    </div>
  );
}

export default App;