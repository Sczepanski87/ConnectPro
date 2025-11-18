import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      
      {/* --- LADO ESQUERDO: USUÁRIOS --- */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center group overflow-hidden">
        <img 
          src= "escritorio.png"
          alt="Trabalhadores de Escritório" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold shadow-black drop-shadow-md">
            Para Você
          </h2>
            <Link to="/registerusuario"
            className="bg-blue-600 hover:bg-blue-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl">
            Cadastrar Usuário
            </Link>
        </div>
      </div>

      {/* --- LADO DIREITO: EMPRESAS --- */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center group overflow-hidden">
        <img 
          src="./public/empresa.webp"
          alt="Prédios Corporativos" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors duration-300"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold shadow-black drop-shadow-md">
            Para Empresas
          </h2>
          <Link to="/registerempresa"
            className="bg-green-600 hover:bg-green-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl">
            Cadastrar Empresa
            </Link>
        </div>
      </div>

    </div>
  );
};

export default RegisterPage;