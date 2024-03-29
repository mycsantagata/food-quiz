import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import QuizIndex from './components/QuizIndex';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizIndex />
  </React.StrictMode>
);

