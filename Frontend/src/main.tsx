// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this import is present
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
