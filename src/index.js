import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './components/Router/Router.jsx';
import { RouterProvider } from 'react-router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} heloo />
  </React.StrictMode>
);
