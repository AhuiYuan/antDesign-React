import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <React.StrictMode>
          <Routes>
            <Route path="*" Component={App}></Route>
          </Routes>
      </React.StrictMode>
    </BrowserRouter>
);
reportWebVitals();
