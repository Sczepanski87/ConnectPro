import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, MapPin, Briefcase, Bookmark, Trash2, User, CheckCircle 
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
    { name: 'Vagas', href: '/empresa' },
    { name: 'Favoritos', href: '/favoritosempresa' },
    { name: 'Mensagens', href: '/chatempresa' },
  ];

  const isActive = (path) => {
    if (path.startsWith('/#') || path.startsWith('#')) {
        return location.pathname === '/';
    }
    return location.pathname === path;
  };

   return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 relative">
              <div className="flex-shrink-0"><Logo /></div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-900 font-medium rounded-md text-sm"> 
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
                  <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
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


// --- Componente Card de Vaga (Simplificado para Favoritos) ---
const JobCard = ({ item, onRemove }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 relative group">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-4">
        <img src={item.logo} alt={item.company} className="h-12 w-12 rounded-lg object-contain border border-gray-100" />
        <div>
          <h3 className="text-lg font-bold text-blue-900 line-clamp-1">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.company}</p>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-red-400 hover:text-red-600 p-1 hover:bg-red-50 rounded-full transition-colors"
        title="Remover dos favoritos"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
    
    <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {item.location}</span>
      <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" /> {item.type}</span>
    </div>

    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-green-700 font-semibold text-sm">{item.salary}</span>
        <Link to={`/jobs/${item.id}`} className="text-teal-600 hover:text-teal-800 text-sm font-medium">Ver Detalhes →</Link>
    </div>
  </div>
);


// --- Mock Data ---
const initialSavedJobs = [
  { id: 1, title: 'Desenvolvedor(a) Front-End React', company: 'TechCorp', logo: 'https://placehold.co/100x100/1e3a8a/ffffff?text=T', location: 'São Paulo, SP', type: 'Tempo Integral', salary: 'R$ 8.000' },
  { id: 3, title: 'Engenheiro(a) de Dados Sênior', company: 'DataSolutions', logo: 'https://placehold.co/100x100/7c3aed/ffffff?text=D', location: 'Rio de Janeiro, RJ', type: 'Tempo Integral', salary: 'R$ 15.000' },
];

// --- Componente Card de Candidato (Simplificado) ---

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState('jobs'); // default agora mostra candidatos
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs);

  const removeJob = (id) => setSavedJobs(prev => prev.filter(job => job.id !== id));

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900">Meus Favoritos</h1>
            <p className="text-gray-600 mt-2">Gerencie as vagas e perfis que você salvou para acessar mais tarde.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`pb-4 px-6 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'jobs' 
              ? 'border-teal-500 text-teal-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Vagas Salvas ({savedJobs.length})
          </button>
        </div>
        
        {/* Content */}
        <div>
          {activeTab === 'jobs' && (
            savedJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedJobs.map(job => (
                  <JobCard key={job.id} item={job} onRemove={removeJob} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900">Nenhuma vaga salva</h3>
                <Link to="/empresa" className="text-teal-600 hover:underline mt-2 inline-block">Encontrar Vagas</Link>
              </div>
            )
          )}
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