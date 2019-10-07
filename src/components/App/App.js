import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Counter from '../Counter/Counter';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    count: 0
  }
  
  render() {
    const { count } = this.state;

    return (
      <div className={styles.wrap}>
        <Counter 
          count={count}
          onCountDown={() => this.setState({ count: count - 1})}
          onCountUp={() => this.setState({ count: count + 1})}
          resetAll={() => this.setState({ count: 0 })}
        />
      </div>
    );
  };
};

export default App;