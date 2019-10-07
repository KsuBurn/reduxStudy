import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styles from './Counter.module.css';

const Counter = ({ count, onCountDown, onCountUp, resetAll }) => {
  return(
    <div className={styles.count_wrap}>
      <span className={styles.count}>
        { count }
      </span>
      <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
        <Button onClick={onCountDown}>-</Button>
        <Button onClick={resetAll}>R</Button>
        <Button onClick={onCountUp}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;