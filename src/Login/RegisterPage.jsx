import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="text-3xl font-bold cursor-pointer mb-8 inline-block">
    <span className="text-blue-900">Connect</span>
    <span className="text-teal-500">Pro</span>
  </Link>
);

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Logo />
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Como você deseja se cadastrar?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Escolha o tipo de conta que melhor se adapta às suas necessidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Opção: Usuário (Candidato) */}
        <Link 
          to="/registerusuario" 
          className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
        >
          <div className="h-20 w-20 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
            <User className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Cadastrar Usuário</h3>
          <p className="text-gray-600">
            Sou um profissional em busca de vagas e oportunidades de carreira.
          </p>
          <span className="mt-6 px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors">
            Sou Candidato
          </span>
        </Link>

        {/* Opção: Empresa */}
        <Link 
          to="/registerempresa" 
          className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-teal-500 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
        >
          <div className="h-20 w-20 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
            <Building className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Cadastrar Empresa</h3>
          <p className="text-gray-600">
            Quero publicar vagas, buscar talentos e gerenciar processos seletivos.
          </p>
          <span className="mt-6 px-6 py-2 rounded-full bg-teal-50 text-teal-700 font-semibold group-hover:bg-teal-600 group-hover:text-white transition-colors">
            Sou Empresa
          </span>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Já possui uma conta?{' '}
          <Link to="/login" className="font-bold text-blue-900 hover:underline">
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;