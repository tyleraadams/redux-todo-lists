import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
	<Provider store={createStore(todoApp,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <App />
  </Provider>,
  document.getElementById('root')
);
