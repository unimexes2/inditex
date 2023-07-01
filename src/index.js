import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './context/store';
import reportWebVitals from './reportWebVitals';
import LayoutMain from './layouts/Layout';
import './css/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <LayoutMain style={{ textDecoration: 'none' }} />
  </Provider>,
);

reportWebVitals();
