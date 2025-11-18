import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx'; 
import LoginPage from './Login/LoginPage.jsx'; 
import RegisterPage from './Login/RegisterPage.jsx'; 
import JobPage from './Pages/JobPage.jsx'
import ChatPage from './Chat/ChatPage.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/job" element={<JobPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;