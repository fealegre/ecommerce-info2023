// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./contexts/AuthProvider";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
