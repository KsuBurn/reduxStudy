import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './Counter.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Hoc = (Component) => {
  return class extends React.Component {
    render() {
      return(
        <Component {...this.props} variant="contained" className={styles.button}>
          {this.props.children}
        </Component>
      );
    }
  }
}

const HocButton = Hoc(Button);


const Counter = ({ count, onCountDown, onCountUp, resetAll }) => {
  
  return(
    <div className={styles.count_wrap}>
      <span className={styles.count}>
        { count }
      </span>
      <div>
        <HocButton onClick={onCountDown}>-</HocButton>
        <HocButton onClick={resetAll}>R</HocButton>
        <HocButton onClick={onCountUp}>+</HocButton>
      </div>
    </div>
  );
};


export default Counter;