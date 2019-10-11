import React from 'react';
import { WrappedCounter } from '../Counter/Counter';

import styles from './App.module.css';

class App extends React.Component {
   
  render() {
    
    return (
      <div className={styles.wrap}>
        <WrappedCounter />
      </div>
    );
  };
};

export default App;