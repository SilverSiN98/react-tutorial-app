import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoPage from './components/TodoPage'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
  
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoPage />);
