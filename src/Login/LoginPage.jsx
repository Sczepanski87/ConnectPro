import React from 'react';
import { Link, useNavigate} from 'react-router-dom'; 
import { Mail, Lock, LogIn, User } from 'lucide-react';


const Logo = () => (
  <Link to="/" className="flex items-center justify-center mb-8">
    <img 
      src="/ConnectProLogo.png" 
      alt="ConnectPro Logo" 
      className="h-30 w-auto" 
    />
  </Link>
);

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const loginValue = form.email.value.trim();

    // Detecta CNPJ: considera 14 dígitos (com ou sem máscara)
    const digits = loginValue.replace(/\D/g, '');
    const isCNPJ = digits.length === 14;
    const isEmail = /\S+@\S+\.\S+/.test(loginValue);

    const payload = {
      login: loginValue,
      type: isCNPJ ? 'cnpj' : isEmail ? 'email' : 'unknown',
    };

    console.log('Tentativa de login:', payload);

    // Redireciona dependendo do tipo (ex.: empresas para /empresa)
    if (isCNPJ) {
      navigate('/empresa');
    } else {
      // fallback para usuário comum
      navigate('/usuario');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-10">
          <Logo />
          <h2 className="text-3xl font-bold text-blue-900">Bem-vindo(a) de volta!</h2>
          <p className="mt-2 text-gray-600">Entre para continuar sua jornada profissional.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="sr-only">Endereço de Email</label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                placeholder="Email ou CNPJ (14 dígitos)"
                required
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="password" className="sr-only">Senha</label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                placeholder="********"
                required
              />
            </div>
          </div>

          {/* Lembre-me e Esqueceu a Senha */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                Lembrar-me
              </label>
            </div>
            <a href="#" className="font-medium text-blue-800 hover:text-blue-600">
              Esqueceu a senha?
            </a>
          </div>

          {/* Botão de Login */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-blue-300 group-hover:text-blue-100 transition-colors" aria-hidden="true" />
              </span>
              Entrar
            </button>
          </div>
        </form>

        {/* Link para Cadastro */}
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-700">
            Não tem uma conta?{' '}
            <Link to="/register" className="font-medium text-teal-600 hover:text-teal-500">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
