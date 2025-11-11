import React, { useState, useEffect } from 'react'; // Importa useState e useEffect
import { Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, Image } from 'lucide-react'; // Importa o ícone Image

const Logo = () => (
  <Link to="/" className="flex items-center justify-center mb-8">
    <img 
      src="/ConnectProLogo.png" 
      alt="ConnectPro Logo" 
      className="h-30 w-auto" 
    />
  </Link>
);

const RegisterPage = () => {
  // Estado para a imagem selecionada e a URL de pré-visualização
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    // TODO: Adicionar lógica para fazer upload do 'selectedImage' 
    // para um serviço de storage (como Firebase Storage, S3, etc.)
    // e salvar a URL no perfil do usuário.
    alert('Tentativa de Cadastro! (A lógica real, incluindo upload de imagem, seria implementada aqui)');
  };

  // Handler para quando o arquivo de imagem for selecionado
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      // Gera uma URL local para a pré-visualização
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Limpa a URL do objeto para evitar vazamentos de memória
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-10">
          <Logo />
          <h2 className="text-3xl font-bold text-blue-900">Crie sua conta</h2>
          <p className="mt-2 text-gray-600">Comece sua jornada profissional hoje.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo de Upload de Imagem */}
          <div className="flex flex-col items-center space-y-3">
            <label htmlFor="profile-pic" className="cursor-pointer">
              {/* Mostra a pré-visualização ou o ícone padrão */}
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Pré-visualização"
                  className="h-32 w-32 rounded-full object-cover shadow-md border-2 border-gray-300"
                />
              ) : (
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 hover:bg-gray-300 transition-colors">
                  <Image className="h-16 w-16" />
                </div>
              )}
            </label>
            <span className="text-sm text-gray-600">
              {selectedImage ? selectedImage.name : 'Adicionar foto de perfil (Opcional)'}
            </span>
            <input
              type="file"
              id="profile-pic"
              name="profile-pic"
              className="hidden" // Esconde o input padrão
              onChange={handleImageChange}
              accept="image/png, image/jpeg" // Aceita apenas imagens
            />
          </div>

          {/* Campo Nome Completo */}
          <div>
            <label htmlFor="name" className="sr-only">Nome Completo</label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                placeholder="Seu nome completo"
                required
              />
            </div>
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="sr-only">Endereço de Email</label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                placeholder="seu.email@exemplo.com"
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
                placeholder="Crie uma senha"
                required
              />
            </div>
          </div>
          
          {/* Campo Confirmar Senha */}
          <div>
            <label htmlFor="confirm-password" className="sr-only">Confirmar Senha</label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                placeholder="Confirme sua senha"
                required
              />
            </div>
          </div>

          {/* Checkbox de Termos */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-gray-900">
                Eu aceito os <a href="#" className="font-medium text-blue-800 hover:text-blue-600">Termos de Uso</a>
              </label>
            </div>
          </div>

          {/* Botão de Cadastrar */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserPlus className="h-5 w-5 text-blue-300 group-hover:text-blue-100 transition-colors" aria-hidden="true" />
              </span>
              Cadastrar
            </button>
          </div>
        </form>

        {/* Link para Login */}
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-700">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium text-teal-600 hover:text-teal-500">
              Entre aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;