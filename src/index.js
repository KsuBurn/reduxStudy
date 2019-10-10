import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { WrappedApp } from './components/App/App';
import { Provider } from 'react-redux';
import store from './components/store/store';

ReactDOM.render((
  <Provider store={store}>
    <WrappedApp />
  </Provider>
), document.getElementById('root'));