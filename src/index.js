import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchLists } from './actions'
import todoApp from './reducers';
import App from './components/App/App';
import './index.css';

import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();

const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))
);

store.dispatch(fetchLists()).then(() =>
  console.log(store.getState())
)
ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

