import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <HashRouter>
       <App />
    </HashRouter>
 </React.StrictMode>
);

reportWebVitals(console.log);
