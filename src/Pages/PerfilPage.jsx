import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, MapPin, Mail, Phone, Globe, Linkedin, Github, 
  Briefcase, GraduationCap, Edit3, Camera, ExternalLink, User
} from 'lucide-react';

const Logo = () => (
  <Link to="/" className="text-3xl font-bold cursor-pointer">
    <span className="text-blue-900">Connect</span>
    <span className="text-teal-500">Pro</span>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sair', href: '/register' },
  ];

  return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 relative">
              <div className="flex-shrink-0"><Logo /></div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium rounded-md text-sm ${item.name === 'Sair' ? 'text-red-600 hover:text-red-700' : 'text-gray-700 hover:text-blue-900'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
    
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/perfil" className="flex items-center gap-2 text-blue-900 font-bold">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                        JL
                    </div>
                    <span className="text-sm">Júlia Lima</span>
                </Link>
              </div>
    
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden shadow-lg bg-white px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${item.name === 'Sair' ? 'text-red-600 hover:text-red-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/perfil" className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 bg-blue-50" onClick={() => setIsOpen(false)}>
                    Meu Perfil
                </Link>
            </div>
          )}
        </nav>
      );
    };

// --- Dados do Perfil (apenas campos coletáveis no registro) ---
const mockProfile = {
  name: 'Júlia Lima',
  role: 'Desenvolvedora Front-End Júnior',
  location: 'São Paulo, SP',
  email: 'julia.lima@exemplo.com',
  phone: '(11) 99999-8888',
  avatar: 'https://placehold.co/150x150/e8f4f8/000000?text=JL',
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Git'],
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(mockProfile.skills || []);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    const s = newSkill.trim();
    if (!s) return;
    if (!skills.includes(s)) {
      setSkills((prev) => [...prev, s]);
    }
    setNewSkill('');
  };

  const removeSkill = (skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        {/* Cartão Principal (Estilo Login Page) */}
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          
          <div className="bg-blue-900 h-32 relative">
          </div>

          {/* Conteúdo do Perfil */}
          <div className="px-8 pb-8">
            
            {/* Avatar e Identificação (Sobrepondo o Header) */}
            <div className="relative -mt-16 mb-6 flex flex-col items-center text-center">
               <div className="relative">
                 <img 
                   src={mockProfile.avatar} 
                   alt={mockProfile.name} 
                   className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                 />
               </div>
               
               <div className="flex items-center gap-3 mt-3">
                 <h1 className="text-2xl font-bold text-gray-900">{mockProfile.name}</h1>
                 <button
                   onClick={() => setIsEditing((v) => !v)}
                   className="ml-2 inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-blue-50 text-blue-900 hover:bg-blue-100"
                 >
                   <Edit3 className="h-4 w-4" />
                   {isEditing ? 'Salvar' : 'Editar'}
                 </button>
               </div>
               <p className="text-teal-600 font-medium">{mockProfile.role}</p>
               <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-3 w-3 mr-1" /> {mockProfile.location}
               </div>
            </div>

            {/* Divisória */}
            <div className="border-t border-gray-100 my-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Coluna 1: Informações básicas (apenas dados do registro) */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-900" /> Informações
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p className="font-medium">Função: <span className="text-gray-700">{mockProfile.role}</span></p>
                    <p>Localização: <span className="text-gray-700">{mockProfile.location}</span></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-900" /> Habilidades
                  </h3>
                  <div className="flex flex-wrap gap-2 items-center">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100">
                        <span>{skill}</span>
                        {isEditing && (
                          <button onClick={() => removeSkill(skill)} className="text-blue-600 hover:text-blue-800">
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    ))}
                    {isEditing && (
                      <div className="flex items-center gap-2">
                        <input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') addSkill(); }}
                          className="border border-gray-200 rounded-md px-2 py-1 text-sm"
                          placeholder="Adicionar habilidade"
                        />
                        <button onClick={addSkill} className="px-2 py-1 bg-teal-500 text-white rounded-md text-sm">Adicionar</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Coluna 2: Contato (apenas email e telefone) */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-900" /> Contato
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2 truncate">
                      <Mail className="h-4 w-4 text-gray-400" /> {mockProfile.email}
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" /> {mockProfile.phone}
                    </li>
                  </ul>
                </div>

                {/* Botões de Ação (mantidos) */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Ações Rápidas</h4>
                  <div className="space-y-2">
                    <button className="w-full py-2 px-3 bg-teal-500 border border-gray-300 text-white text-sm font-medium rounded-md hover:bg-teal-300 transition-colors flex items-center justify-center gap-2">
                      Compartilhar Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

  <footer className="bg-blue-100 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0 w-full md:w-auto">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <p className="mt-4 text-blue-900 max-w-xs mx-auto md:mx-0">
            Conectando talentos ao futuro
          </p>
        </div>
        <div className="text-center md:text-right w-full md:w-auto">
          <h4 className="text-lg font-semibold text-blue-900">Projeto Integrado - 2º Semestre</h4>
          <p className="text-blue-900">Análise e Desenvolvimento de Sistemas</p>
          <p className="text-blue-900">Unisenac - Centro Universitário RS</p>
          <div className="mt-4 text-sm text-blue-900">
            <p>Desenvolvido por:</p>
            <p>Brian da Silva Guterres</p>
            <p>Victor Sczepanski Pereira</p>
            <p>Frederico Marten Brião</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-blue-900 text-sm mt-6">
        <p>&copy; {new Date().getFullYear()} ConnectPro. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
    </div>
  );
}         