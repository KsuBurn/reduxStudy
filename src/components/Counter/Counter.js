import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styles from './Counter.module.css';
import {ButtonContext} from '../App/App';

const Counter = ({ count }) => {
  return(
    <div className={styles.count_wrap}>
      <span className={styles.count}>
        { count }
      </span>
        <ButtonContext.Consumer>
          {({ onCountDown, resetAll, onCountUp }) => (
            <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
              <Button onClick={onCountDown}>-</Button>
              <Button onClick={resetAll}>R</Button>
              <Button onClick={onCountUp}>+</Button>
            </ButtonGroup>
          )}
        </ButtonContext.Consumer>
    </div>
  );
};

export default Counter;