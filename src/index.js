import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MemoHook } from './06-Memo/MemoHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MemoHook />
  // </React.StrictMode>
);
