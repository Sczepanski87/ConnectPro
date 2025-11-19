import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx'; 
import LoginPage from './Login/LoginPage.jsx'; 
import RegisterPage from './Login/RegisterPage.jsx'; 
import RegisterUsuario from './Login/RegisterUsuario.jsx'
import RegisterEmpresa from './Login/RegisterEmpresa.jsx'
import EmpresaPage from './Pages/EmpresaPage.jsx'
import CandidatoPage from './Pages/CandidatoPage.jsx'
import Favoritos from './Pages/Favoritos.jsx'
import ChatPage from './Chat/ChatPage.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/registerusuario" element={<RegisterUsuario />} />
      <Route path="/registerempresa" element={<RegisterEmpresa />} />
      <Route path="/empresa" element={<EmpresaPage />} />
      <Route path="/candidato" element={<CandidatoPage />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;