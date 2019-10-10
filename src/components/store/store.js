import React from 'react';
import { createStore } from 'redux';
import App from '../App/App';

const initialState = { count: 0 };

var reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': return { ...state, count: state.count + action.amount };
    case 'DECREMENT': return { ...state, count:  state.count - action.amount };
    case 'RESET': return { ...state, count: 0 };
    default: return { count: 0 };
  }
  return state;
};

const store = createStore(reducer);
 
const incrementAction = {
  type: 'INCREMENT',
  amount: 1
};

const decrementAction = {
  type: 'DECREMENT',
  amount: 1
};

const resetAction = {
  type: 'RESET',
  amount: 0
};

export default store;
export {initialState, incrementAction,decrementAction, resetAction};