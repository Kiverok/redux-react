import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));
  


reportWebVitals();
