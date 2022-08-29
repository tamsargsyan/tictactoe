import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import GetValue from './GetValue/getValue.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <GetValue />
    </React.StrictMode>
);

reportWebVitals();
