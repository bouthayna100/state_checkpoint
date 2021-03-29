import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClass from './AppClasse';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
