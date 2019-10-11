import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Provider, connect } from 'react-redux';
import { initialState, incrementAction, decrementAction, resetAction} from '../store/store';


import styles from './Counter.module.css';


class Counter extends  React.Component {
  render(){
    const dispatch = this.props.dispatch;
    const count= this.props.count;
    return(
      <div className={styles.count_wrap}>
        <span className={styles.count}>
          { count }
        </span>
        <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
          <Button onClick={()=>dispatch(decrementAction)}>-</Button>
          <Button onClick={()=>dispatch(resetAction)}>R</Button>
          <Button onClick={()=>dispatch(incrementAction)}>+</Button>
        </ButtonGroup>
      </div>
    );
  };
};

const putStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count
  }
};

const WrappedCounter = connect(putStateToProps)(Counter);

export default Counter;
export { WrappedCounter };