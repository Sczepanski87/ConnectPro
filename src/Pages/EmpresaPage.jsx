import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, Search, MapPin, Filter, Bookmark, User, Briefcase, Star, CheckCircle
} from 'lucide-react';

// --- Logotipo ---
const Logo = () => (
  <Link to="/" className="text-3xl font-bold cursor-pointer">
    <span className="text-blue-900">Connect</span>
    <span className="text-teal-500">Pro</span>
  </Link>
);

// --- Navbar (Copiada e Atualizada) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Favoritos', href: '/favoritosempresa' },
    { name: 'Mensagens', href: '/chatempresa' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-900 font-medium rounded-md text-sm"> {item.name} </Link> 
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer (Copiado) ---
const Footer = () => (
  <footer className="bg-blue-100 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Logo />
          <p className="mt-4 text-blue-900 max-w-xs">
            Conectando talentos ao futuro
          </p>
        </div>
        <div className="text-center md:text-right">
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
      <div className="flex text-center text-blue-900 text-sm">
        <p>&copy; {new Date().getFullYear()} ConnectPro. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

// --- Mock Data: Empresas ---
const mockCompanies = [
    {
        id: 1,
        name: 'TechCorp',
        role: 'Empresa de Tecnologia',
        experience: 'Média',
        location: 'São Paulo, SP',
        skills: ['React', 'TypeScript', 'Node.js'],
        bio: 'Equipe ágil focada em produtos web com cultura de aprendizado contínuo.',
        avatar: 'https://placehold.co/120x120/1e3a8a/ffffff?text=T',
        available: true,
    },
    {
        id: 2,
        name: 'InovaSoft',
        role: 'Agência de Design',
        experience: 'Pequena',
        location: 'Remoto',
        skills: ['Figma', 'UX Research', 'Prototipagem'],
        bio: 'Foco em UX, pesquisa e design de produtos digitais.',
        avatar: 'https://placehold.co/120x120/059669/ffffff?text=I',
        available: true,
    },
    {
        id: 3,
        name: 'DataSolutions',
        role: 'Consultoria de Dados',
        experience: 'Grande',
        location: 'Rio de Janeiro, RJ',
        skills: ['Python', 'Spark', 'AWS', 'SQL'],
        bio: 'Trabalhamos com pipelines de dados, ML e escalabilidade em nuvem.',
        avatar: 'https://placehold.co/120x120/7c3aed/ffffff?text=D',
        available: false,
    },
    {
        id: 4,
        name: 'VendeMais',
        role: 'Marketing & E-commerce',
        experience: 'Média',
        location: 'Curitiba, PR',
        skills: ['SEO', 'Google Ads', 'Inbound'],
        bio: 'Times multidisciplinares focados em performance e growth.',
        avatar: 'https://placehold.co/120x120/db2777/ffffff?text=V',
        available: true,
    },
];

// --- Componente Card de Empresa (para candidatos) ---
const CompanyCard = ({ company }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                        <img src={company.avatar} alt={company.name} className="h-16 w-16 rounded-full border-2 border-gray-100" />
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 hover:text-blue-700 cursor-pointer">
                                {company.name}
                            </h3>
                            <p className="text-teal-600 font-medium">{company.role}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className="text-gray-400 hover:text-teal-500 transition-colors"
                        title="Salvar empresa">
                        <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-teal-500 text-teal-500' : ''}`} />
                    </button>
                </div>

                <p className="mt-4 text-gray-600 text-sm line-clamp-2">
                    {company.bio}
                </p>

                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {company.location}
                    </span>
                    <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {company.experience}
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {company.skills.map(skill => (
                        <span key={skill} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-200">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                        {company.available ? (
                            <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                                <CheckCircle className="h-3 w-3 mr-1" /> Disponível
                            </span>
                        ) : (
                            <span className="text-gray-400 text-xs font-medium bg-gray-50 px-2 py-1 rounded-full">
                                Indisponível
                            </span>
                        )}
                    </div>
                    <Link to="/chatempresa" className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-sm transition-colors">
                        Mensagem
                    </Link>
                </div>
            </div>
        </div>
    );
};

// --- Sidebar de Filtros ---
const FiltersSidebar = ({
    roles, selectedRoles, toggleRole,
    levels, selectedLevels, toggleLevel,
    skills, selectedSkills, toggleSkill, clearFilters, applyFilters
}) => (
    <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
             <h3 className="text-2xl font-bold text-blue-900">Filtros</h3>
        </div>
       
        {/* Filtro por Cargo */}
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Cargo / Área</h4>
            <div className="space-y-2">
                {roles.map(role => (
                    <label key={role} className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedRoles.includes(role)}
                            onChange={() => toggleRole(role)}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
                        />
                        <span className="ml-3 text-gray-700">{role}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Filtro por Nível */}
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Nível de Experiência</h4>
            <div className="space-y-2">
                {levels.map(level => (
                    <label key={level} className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedLevels.includes(level)}
                            onChange={() => toggleLevel(level)}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
                        />
                        <span className="ml-3 text-gray-700">{level}</span>
                    </label>
                ))}
            </div>
        </div>

         {/* Filtro por Skills */}
         <div>
            <h4 className="font-semibold text-gray-800 mb-2">Habilidades</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                            selectedSkills.includes(skill) 
                            ? 'bg-teal-100 text-teal-800 border-teal-200' 
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        {skill}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex gap-3">
            <button onClick={clearFilters} className="flex-1 py-2 px-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                Limpar Filtros
            </button>
            <button onClick={applyFilters} className="flex-1 py-2 px-4 bg-blue-600 border border-gray-300 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors">
                Aplicar
            </button>
        </div>
    </div>
);

export default function EmpresaPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [keyword, setKeyword] = useState('');
    
    const ROLES = ['Desenvolvedor', 'Designer', 'Dados', 'Produto', 'Marketing'];
    const LEVELS = ['Estágio', 'Júnior', 'Pleno', 'Sênior', 'Especialista'];
    const SKILLS = ['React', 'Node.js', 'Python', 'Figma', 'SQL', 'AWS', 'Java', 'TypeScript'];

    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies);

    // Helpers de toggle
    const toggleSelection = (item, list, setList) => {
        setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    const clearFilters = () => {
        setSelectedRoles([]);
        setSelectedLevels([]);
        setSelectedSkills([]);
        setKeyword('');
        setFilteredCompanies(mockCompanies);
    };

    const applyFilters = () => {
        let results = mockCompanies.slice();

        // Filtro por Palavra-chave (Nome ou Bio)
        if (keyword.trim()) {
            const k = keyword.toLowerCase();
            results = results.filter(c => 
                c.name.toLowerCase().includes(k) || 
                c.bio.toLowerCase().includes(k) ||
                c.role.toLowerCase().includes(k) ||
                (Array.isArray(c.skills) && c.skills.some(skill => skill.toLowerCase().includes(k)))
            );
        }

        // Filtro por Cargo (Match parcial no texto do cargo)
        if (selectedRoles.length > 0) {
            results = results.filter(c => selectedRoles.some(role => c.role.includes(role) || (role === 'Dados' && c.role.includes('Dados'))));
        }

        // Filtro por Nível
        if (selectedLevels.length > 0) {
            results = results.filter(c => selectedLevels.includes(c.experience));
        }

        // Filtro por Skills
        if (selectedSkills.length > 0) {
            results = results.filter(c => c.skills.some(skill => selectedSkills.includes(skill)));
        }

        setFilteredCompanies(results);
        setIsFilterOpen(false); // Fecha sidebar mobile se estiver aberta
    };

    return (
        <div className="bg-white font-sans antialiased">
            <Navbar />
            <main className="bg-gray-50 min-h-screen">
                {/* --- Header da Página --- */}
                <div className="bg-blue-900 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Encontre empresas disponíveis
                        </h1>
                        <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                            Navegue por empresas, filtre por setor e habilidades, e encontre oportunidades para candidatar-se.
                        </p>
                    </div>
                </div>

                {/* --- Barra de Busca e Controles --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4 items-center">
                         <div className="relative flex-1 w-full">
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
                                placeholder="Busque por nome, cargo ou palavra-chave..."
                                className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button 
                            onClick={() => setIsFilterOpen(true)} 
                            className="md:hidden w-full h-12 flex items-center justify-center gap-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                        >
                            <Filter className="h-5 w-5" /> Filtros
                        </button>
                        <button 
                            onClick={applyFilters}
                            className="w-full md:w-auto h-12 px-8 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-md"
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                {/* --- Conteúdo Principal --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Sidebar Desktop */}
                        <div className="hidden lg:block w-1/4 xl:w-1/5">
                            <FiltersSidebar 
                                roles={ROLES} selectedRoles={selectedRoles} toggleRole={(r) => toggleSelection(r, selectedRoles, setSelectedRoles)}
                                levels={LEVELS} selectedLevels={selectedLevels} toggleLevel={(l) => toggleSelection(l, selectedLevels, setSelectedLevels)}
                                skills={SKILLS} selectedSkills={selectedSkills} toggleSkill={(s) => toggleSelection(s, selectedSkills, setSelectedSkills)}
                                clearFilters={clearFilters} applyFilters={applyFilters}
                            />
                        </div>

                        {/* Sidebar Mobile (Overlay) */}
                        {isFilterOpen && (
                            <div className="fixed inset-0 bg-black/50 z-50 md:hidden flex justify-end">
                                <div className="w-4/5 max-w-sm bg-white h-full p-6 overflow-y-auto shadow-xl">
                                    <div className="flex justify-end mb-4">
                                        <button onClick={() => setIsFilterOpen(false)}><X className="h-6 w-6 text-gray-500" /></button>
                                    </div>
                                    <FiltersSidebar 
                                        roles={ROLES} selectedRoles={selectedRoles} toggleRole={(r) => toggleSelection(r, selectedRoles, setSelectedRoles)}
                                        levels={LEVELS} selectedLevels={selectedLevels} toggleLevel={(l) => toggleSelection(l, selectedLevels, setSelectedLevels)}
                                        skills={SKILLS} selectedSkills={selectedSkills} toggleSkill={(s) => toggleSelection(s, selectedSkills, setSelectedSkills)}
                                        clearFilters={clearFilters} applyFilters={applyFilters}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Lista de Resultados */}
                        <div className="w-full lg:w-3/4 xl:w-4/5 space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {filteredCompanies.length} Empresas encontradas
                                </h2>
                                <span className="text-sm text-gray-500">Ordenado por relevância</span>
                            </div>
                            
                            {filteredCompanies.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredCompanies.map(company => (
                                        <CompanyCard key={company.id} company={company} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                    <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                    <h3 className="text-lg font-medium text-gray-900">Nenhuma empresa encontrada</h3>
                                    <p className="text-gray-500">Tente ajustar seus filtros ou termos de busca.</p>
                                    <button onClick={clearFilters} className="mt-4 text-teal-600 hover:text-teal-800 font-medium">
                                        Limpar todos os filtros
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}