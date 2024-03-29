import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import store from './Redux/store'
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>,
  document.getElementById('root')
);