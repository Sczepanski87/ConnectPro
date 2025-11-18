import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Building, Image as ImageIcon, FileText, DollarSign } from 'lucide-react';

// --- Logotipo ---
const Logo = () => (
  <Link to="/" className="flex items-center justify-center mb-8">
    <img 
      src="/ConnectProLogo.png" 
      alt="ConnectPro Logo" 
      className="h-30 w-auto" 
    />
  </Link>
);

const RegisterEmpresas = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    // Efeito para criar a URL de pré-visualização da imagem (Logo da Empresa)
    useEffect(() => {
        if (!selectedImage) {
            setPreviewImage(null);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedImage);
        setPreviewImage(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedImage]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de cadastro da empresa aqui
        console.log('Tentativa de Cadastro de Empresa!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
                <div className="text-center mb-10">
                    <Logo />
                    <h2 className="text-3xl font-bold text-blue-900">Cadastre sua Empresa</h2>
                    <p className="mt-2 text-gray-600">Procure talentos que combinem com sua empresa.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Upload de Logo da Empresa */}
                    <div className="flex flex-col items-center space-y-2">
                        <label htmlFor="company-logo" className="cursor-pointer">
                            <span className="sr-only">Escolha o logo da empresa</span>
                            <div className="h-24 w-24 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-300 border-dashed hover:border-blue-500 transition-all">
                                {previewImage ? (
                                    <img src={previewImage} alt="Pré-visualização" className="h-full w-full object-contain p-1" />
                                ) : (
                                    <div className="text-center">
                                        <ImageIcon className="h-8 w-8 text-gray-400 mx-auto" />
                                        <span className="text-xs text-gray-500">Logo</span>
                                    </div>
                                )}
                            </div>
                        </label>
                        <input
                            type="file"
                            id="company-logo"
                            name="company-logo"
                            accept="image/png, image/jpeg"
                            className="sr-only"
                            onChange={handleImageChange}
                        />
                        <button
                            type="button"
                            onClick={() => document.getElementById('company-logo').click()}
                            className="text-sm font-medium text-blue-800 hover:text-blue-600"
                        >
                            Adicionar logo
                        </button>
                    </div>

                    {/* Nome da Empresa */}
                    <div>
                        <label htmlFor="companyName" className="sr-only">Nome da Empresa</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Building className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                                placeholder="Nome da Empresa"
                                required
                            />
                        </div>
                    </div>

                    {/* Descrição da Empresa */}
                    <div>
                        <label htmlFor="description" className="sr-only">Descrição da Empresa</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute top-3 left-0 flex items-start pl-3">
                                <FileText className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <textarea
                                name="description"
                                id="description"
                                rows="3"
                                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2 resize-none"
                                placeholder="Fale um pouco sobre sua empresa..."
                                required
                            />
                        </div>
                    </div>

                    {/* Faixa Salarial Média */}
                    <div>
                        <label htmlFor="salary" className="sr-only">Faixa Salarial Oferecida</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <DollarSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <select
                                name="salary"
                                id="salary"
                                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Faixa Salarial Média para Contratações</option>
                                <option value="estagio">Estágio / Bolsa (até R$ 2.000)</option>
                                <option value="junior">Júnior (R$ 2.500 - R$ 5.000)</option>
                                <option value="pleno">Pleno (R$ 5.000 - R$ 10.000)</option>
                                <option value="senior">Sênior (R$ 10.000 - R$ 18.000)</option>
                                <option value="especialista">Especialista / Gestão (R$ 18.000+)</option>
                                <option value="variavel">A combinar / Variável</option>
                            </select>
                        </div>
                    </div>

                    {/* Email Corporativo */}
                    <div>
                        <label htmlFor="email" className="sr-only">Email Corporativo</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all focus:outline-none focus:ring-2"
                                placeholder="rh@suaempresa.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Senha */}
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
                                placeholder="Crie uma senha forte"
                                required
                            />
                        </div>
                    </div>

                    {/* Botão de Cadastro */}
                    <div>
                        <Link
                            to="/candidato"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors shadow-lg">
                            Criar conta empresarial
                        </Link>
                    </div>
                </form>

                {/* Links de Rodapé */}
                <p className="text-gray-700">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="font-medium text-teal-600 hover:text-teal-500">
                        Entre aqui
                    </Link>
                </p>
                <p className="text-gray-700">
                    É um candidato?{' '}
                    <Link to="/register" className="font-medium text-blue-900 hover:text-blue-700">
                        Cadastre-se aqui
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterEmpresas;