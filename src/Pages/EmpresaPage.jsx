import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, Users, Briefcase, Database,
    Star, Send, FileText, Eye, CheckCircle, Shield, Zap,
    MapPin, Filter, Bookmark
} from 'lucide-react';


const Logo = () => (
    <Link to="/" className="text-3xl font-bold cursor-pointer">
        <span className="text-blue-900">Connect</span>
        <span className="text-teal-500">Pro</span>
    </Link>
);

// Navbar copied/adapted from HomePage.jsx
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Favoritos', href: '/favoritos'},
        { name: 'Chat', href: '/chat'},
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
                            <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-900 font-medium rounded-md text-sm">
                                {item.name}
                            </a>
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
                            <a key={item.name} href={item.href} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


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


const mockJobs = [
    {
        id: 1,
        title: 'Desenvolvedor(a) Front-End React',
        company: 'TechCorp',
        logo: 'https://placehold.co/100x100/1e3a8a/ffffff?text=T',
        location: 'São Paulo, SP',
        type: 'Tempo Integral',
        salary: 'R$ 8.000 - R$ 12.000',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
        posted: '2 dias atrás',
    },
    {
        id: 2,
        title: 'Designer UX/UI Pleno',
        company: 'InovaSoft',
        logo: 'https://placehold.co/100x100/059669/ffffff?text=I',
        location: 'Remoto',
        type: 'Meio Período',
        salary: 'R$ 5.000',
        tags: ['Figma', 'UX Research', 'Prototipagem'],
        posted: '5 dias atrás',
    },
    {
        id: 3,
        title: 'Engenheiro(a) de Dados Sênior',
        company: 'DataSolutions',
        logo: 'https://placehold.co/100x100/7c3aed/ffffff?text=D',
        location: 'Rio de Janeiro, RJ',
        type: 'Tempo Integral',
        salary: 'R$ 15.000 - R$ 20.000',
        tags: ['Python', 'Spark', 'AWS', 'SQL'],
        posted: '1 dia atrás',
    },
    {
        id: 4,
        title: 'Analista de Marketing Digital',
        company: 'VendeMais',
        logo: 'https://placehold.co/100x100/db2777/ffffff?text=V',
        location: 'Curitiba, PR',
        type: 'Híbrido',
        salary: 'R$ 4.500',
        tags: ['SEO', 'Google Ads', 'Inbound'],
        posted: '1 semana atrás',
    },
];

const JobCard = ({ job }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                        <img src={job.logo} alt={`${job.company} logo`} className="h-14 w-14 rounded-lg" />
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 hover:text-blue-700">
                                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                            </h3>
                            <p className="text-gray-700 font-medium">{job.company}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className="text-gray-400 hover:text-teal-500 transition-colors"
                        title="Salvar vaga">
                        <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-teal-500 text-teal-500' : ''}`} />
                    </button>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600">
                    <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                        {job.location}
                    </span>
                    <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1.5 text-gray-500" />
                        {job.type}
                    </span>
                </div>
                <p className="mt-3 text-lg font-semibold text-green-700">{job.salary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm text-gray-500">{job.posted}</p>
                    <Link
                        to={`/jobs/${job.id}`}
                        className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 shadow-md transition-colors">
                        Ver Detalhes
                    </Link>
                </div>
            </div>
        </div>
    );
};

const FiltersSidebar = ({
    types,
    selectedTypes,
    toggleType,
    location,
    setLocation,
    levels,
    selectedLevels,
    toggleLevel,
    clearFilters,
    applyFilters,
}) => (
    <div className="w-full space-y-6">
        <h3 className="text-2xl font-bold text-blue-900">Filtros</h3>
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tipo de Vaga</h4>
            <div className="space-y-2">
                {types.map(type => (
                    <label key={type} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-gray-700">{type}</span>
                    </label>
                ))}
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Localização</h4>
            <div className="relative">
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Cidade ou Estado"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <MapPin className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Nível de Experiência</h4>
            <div className="space-y-2">
                {levels.map(level => (
                    <label key={level} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedLevels.includes(level)}
                            onChange={() => toggleLevel(level)}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                        <span className="ml-3 text-gray-700">{level}</span>
                    </label>
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

export default function JobSearchPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [keyword, setKeyword] = useState('');
    const TYPES = ['Tempo Integral', 'Meio Período', 'Presencial', 'Remoto', 'Híbrido', 'Freelance'];
    const LEVELS = ['Estágio', 'Júnior', 'Pleno', 'Sênior', 'Especialista'];
    const [selectedTypes, setSelectedTypes] = useState([]);
    const toggleType = (type) => {
        setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    };
    const [selectedLevels, setSelectedLevels] = useState([]);
    const toggleLevel = (level) => {
        setSelectedLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]);
    };
    const [location, setLocation] = useState('');
    const clearFilters = () => {
        setSelectedTypes([]);
        setSelectedLevels([]);
        setLocation('');
        setKeyword('');
        setFilteredJobs(mockJobs);
    };
    const [filteredJobs, setFilteredJobs] = useState(mockJobs);
    const applyFilters = () => {
        let results = mockJobs.slice();

        if (selectedTypes.length) {
            results = results.filter(job => selectedTypes.includes(job.type));
        }
        if (selectedLevels.length) {
            // Try to match selectedLevels against tags (best-effort)
            results = results.filter(job => job.tags && job.tags.some(tag => selectedLevels.some(l => tag.toLowerCase().includes(l.toLowerCase()))));
        }
        if (location && location.trim()) {
            const loc = location.toLowerCase();
            results = results.filter(job => job.location.toLowerCase().includes(loc));
        }
        if (keyword && keyword.trim()) {
            const k = keyword.toLowerCase();
            results = results.filter(job =>
                job.title.toLowerCase().includes(k) ||
                job.company.toLowerCase().includes(k) ||
                (job.tags && job.tags.join(' ').toLowerCase().includes(k))
            );
        }
        setFilteredJobs(results);
    };

    return (
        <div className="bg-white font-sans antialiased">
            <Navbar />
            <main className="bg-gray-50 min-h-screen">
                {/* search removed by request */}
                {isFilterOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsFilterOpen(false)}></div>
                )}
                <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden p-6 overflow-y-auto`}>
                    <button onClick={() => setIsFilterOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                        <X className="h-6 w-6" />
                    </button>
                    <FiltersSidebar
                        types={TYPES}
                        selectedTypes={selectedTypes}
                        toggleType={toggleType}
                        location={location}
                        setLocation={setLocation}
                        levels={LEVELS}
                        selectedLevels={selectedLevels}
                        toggleLevel={toggleLevel}
                        clearFilters={() => { clearFilters(); setIsFilterOpen(false); }}
                        applyFilters={() => { applyFilters(); setIsFilterOpen(false); }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="hidden lg:block w-1/4 xl:w-1/5">
                            <FiltersSidebar
                                types={TYPES}
                                selectedTypes={selectedTypes}
                                toggleType={toggleType}
                                location={location}
                                setLocation={setLocation}
                                levels={LEVELS}
                                selectedLevels={selectedLevels}
                                toggleLevel={toggleLevel}
                                clearFilters={clearFilters}
                                applyFilters={applyFilters}
                            />
                        </div>
                        <div className="w-full lg:w-3/4 xl:w-4/5 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Mostrando {filteredJobs.length} vagas
                            </h2>
                            {filteredJobs.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}