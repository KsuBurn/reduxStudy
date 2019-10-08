import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Counter from '../Counter/Counter';

import styles from './App.module.css';

const ButtonContext = React.createContext();

class App extends React.Component {
  state = {
    count: 0
  }
  
  render() {
    const { count } = this.state;
    
    return (
      <div className={styles.wrap}>
        <ButtonContext.Provider
          value={
            {
              onCountDown: () => this.setState({ count: count - 1}),
              onCountUp: () => this.setState({ count: count + 1}),
              resetAll: () => this.setState({ count: 0 })
            }
          }
        >
          <Counter 
            count={count}
            //onCountDown={() => this.setState({ count: count - 1})}
            //onCountUp={() => this.setState({ count: count + 1})}
            //resetAll={() => this.setState({ count: 0 })}
          />
        </ButtonContext.Provider>
      </div>
    );
  };
};

export default App;
export {ButtonContext};
