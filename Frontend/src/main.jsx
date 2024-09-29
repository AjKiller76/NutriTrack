import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import 'createRoot' from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Fix the usage of createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
