import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx'; 
import LoginPage from './Login/LoginPage.jsx'; 
import RegisterPage from './Login/RegisterPage.jsx'; 
import RegisterUsuario from './Login/RegisterUsuario.jsx'
import RegisterEmpresa from './Login/RegisterEmpresa.jsx'
import EmpresaPage from './Pages/EmpresaPage.jsx'
import CandidatoPage from './Pages/CandidatoPage.jsx'
import FavoritosEmpresa from './Favoritos/FavoritosEmpresa.jsx'
import FavoritosUsuario from './Favoritos/FavoritosUsuario.jsx'
import ChatUsuarios from './Chat/ChatUsuario.jsx'
import ChatEmpresa from './Chat/ChatEmpresa.jsx'


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
      <Route path="/favoritosempresa" element={<FavoritosEmpresa />} />
      <Route path="/favoritosusuario" element={<FavoritosUsuario />} />
      <Route path="/chatusuario" element={<ChatUsuarios />} />
      <Route path="/chatempresa" element={<ChatEmpresa />} />
    </Routes>
  );
}

export default App;