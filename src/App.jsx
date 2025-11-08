import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx'; 
import LoginPage from './Login/LoginPage.jsx'; 
import RegisterPage from './Login/RegisterPage.jsx'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;