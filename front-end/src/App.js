import React, { useEffect, useState} from 'react';
import Axios from 'axios'
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Feature from './Components/Feature';
import Navbar from './Components/Navbar';
import Menubar from './Components/Menubar';
import Nomatch from './Components/Nomatch';
import Appointment from './Components/Doctor_Appointment';

function App() {

  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
