import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Counter from '../Counter/Counter';
import store from '../store/store';
import { initialState, incrementAction, decrementAction, resetAction} from '../store/store';
import { Provider, connect } from 'react-redux';
import styles from './App.module.css';

class App extends React.Component {
   
  render() {
    const dispatch = this.props.dispatch;
    const count= this.props.count;
    return (
      <div className={styles.wrap}>
        <Counter 
          count={count}
          onCountDown={()=>dispatch(decrementAction)}
          onCountUp={()=>dispatch(incrementAction)}
          resetAll={()=>dispatch(resetAction)}
        />
      </div>
    );
  };
};

const putStateToProps = (state) => {
  return {
    count: state.count
  }
};

const WrappedApp = connect(putStateToProps)(App);

export default App;
export { WrappedApp };