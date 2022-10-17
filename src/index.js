import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './api/login/login';
import Courses from './components/Courses/Courses';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element = {<Courses/>} path="/courses"/>
        <Route element={<App/>} path="/"/>
    </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
