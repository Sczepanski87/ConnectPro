import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE: Importar o Link
import { 
  Menu, 
  X, 
  Users, 
  Briefcase, 
  Database, 
  Search, 
  Star, 
  Send,
  FileText,
  Eye,
  CheckCircle,
  Shield,
  Zap
} from 'lucide-react';

// --- Logotipo ---
// Recriando o logotipo com texto e Tailwind para ser autônomo
const Logo = () => (
    <span className="text-3xl font-bold">
      <span className="text-blue-900">Connect</span>
      <span className="text-green-600">Pro</span>
    </span>
);

// --- Componente Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Solução', href: '#solucao' },
    { name: 'Público-Alvo', href: '#publico' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Depoimentos', href: '#personas' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-900 font-medium rounded-md text-sm"> {item.name} </a> 
              ))}
            <Link to="/login" className="text-gray-700 hover:text-blue-900 font-medium rounded-md text-sm">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm font-medium shadow-md transition-colors">
              Cadastrar
            </Link>
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
            <Link to="/login" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="block w-full text-left px-3 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-medium shadow-md transition-colors" onClick={() => setIsOpen(false)}>
              Cadastrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Seção Hero (Introdução) ---
const Hero = () => (
  <section id="solucao" className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center justify-center">
      <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl md:text-6xl">
        Conectando talentos ao futuro
      </h1>
      <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
        Uma plataforma e-commerce para conectar profissionais e empresas, otimizando o processo de recrutamento com filtros inteligentes para "matches" mais precisos.
      </p>
      <div className="py-5 mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link  className="px-8 py-3 bg-blue-900 text-white text-lg font-medium rounded-lg hover:bg-blue-800 shadow-lg transform hover:scale-105 transition-all" onClick={() => setIsOpen(false)}>
         Cadastre-se
        </Link>
      </div>
    </div>
  </section>
);

// --- Seção Público Alvo ---
const TargetAudience = () => (
  <section id="publico" className="bg-white py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
          Para quem é o ConnectPro?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Nossa solução é desenhada para os dois lados do processo de recrutamento.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105">
          <div className="flex items-center justify-center h-16 w-16 bg-blue-900 text-white rounded-full mb-6">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Candidatos</h3>
          <p className="mt-4 text-gray-700">
            Profissionais que desejam uma plataforma para divulgar suas qualificações, projetos e portfólios de forma detalhada, segura e eficiente, buscando se destacar no mercado.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105">
          <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mb-6">
            <Briefcase className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Empresas e Recrutadores</h3>
          <p className="mt-4 text-gray-700">
            Recrutadores em busca de uma ferramenta acessível e poderosa para encontrar talentos compatíveis com suas vagas, utilizando filtros avançados para agilizar o processo de contratação.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Seção Recursos 
const features = [
  {
    icon: Database,
    name: 'Cadastro e Perfis Detalhados',
    description: 'Criação de contas seguras e perfis ricos, incluindo portfólios e projetos.',
  },
  {
    icon: Search,
    name: 'Busca com Filtros Avançados',
    description: 'Encontre candidatos ou vagas com filtros inteligentes, categorias e palavras-chave.',
  },
  {
    icon: Send,
    name: 'Sistema de Candidatura Fácil',
    description: 'Candidate-se a vagas de interesse com seu perfil preenchido, em poucos cliques.',
  },
  {
    icon: Star,
    name: 'Salvar Vagas (Favoritos)',
    description: 'Salve vagas de interesse em uma lista de favoritos para ver mais tarde.',
  },
  {
    icon: Eye,
    name: 'Acompanhe o Status',
    description: 'Acompanhe o status da sua aplicação (Visualizada, Em processo, Finalizada).',
  },
  {
    icon: FileText,
    name: 'Gerenciamento de Vagas',
    description: 'Empresas podem publicar, editar e gerenciar suas vagas de forma simplificada.',
  },
];

const Features = () => (
  <section id="recursos" className="bg-blue-900 py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Recursos poderosos para o "match" perfeito
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Ferramentas pensadas para otimizar o tempo de recrutadores e candidatos.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.name} className="bg-white p-6 rounded-xl shadow-lg">
            <feature.icon className="h-10 w-10 text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Seção Personas (Depoimentos) ---
const personas = [
  {
    name: 'Júlia Lima',
    role: 'Recém-formada em ADS',
    quote: 'Eu tenho vários projetos que mostram o que sei fazer, mas nos sites de emprego tradicionais, meu currículo é só mais um no meio de milhares.',
    solution: 'No ConnectPro, Júlia destaca seus projetos acadêmicos e GitHub, provando seu valor além da "experiência profissional formal".'
  },
  {
    name: 'André Bastos',
    role: 'CEO de Startup',
    quote: 'Estou montando o time do zero. Preciso de gente boa que tope construir junto, mas não posso passar semanas analisando currículos.',
    solution: 'Com filtros ágeis, André encontra candidatos com o perfil técnico e cultural certo, acelerando a contratação antes da concorrência.'
  },
  {
    name: 'Mariana Costa',
    role: 'Em Transição de Carreira (UX)',
    quote: 'Tenho uma década de experiência em gestão, só preciso de uma chance para mostrar como ela se aplica à minha nova carreira.',
    solution: 'A plataforma permite que Mariana destaque suas "habilidades transferíveis", fazendo com que recrutadores vejam seu potencial completo.'
  },
];

const Personas = () => (
  <section id="personas" className="bg-gray-50 py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
          Feito para desafios reais
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Entendemos as frustrações de candidatos e recrutadores.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {personas.map((persona) => (
          <div key={persona.name} className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            <div className="p-8 flex-grow">
              <blockquote className="text-lg text-gray-700 italic">
                "{persona.quote}"
              </blockquote>
            </div>
            <div className="bg-gray-100 p-8">
              <h4 className="text-lg font-bold text-gray-900">{persona.name}</h4>
              <p className="text-teal-600 font-medium">{persona.role}</p>
              <p className="mt-4 text-gray-800">
                <span className="font-bold text-blue-900">Solução ConnectPro:</span> {persona.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Seção Requisitos Não Funcionais (Nossa Garantia) ---
const nonFunctionalReqs = [
  { icon: Zap, name: 'Desempenho', description: 'Tempo de resposta rápido para uma experiência fluida.' },
  { icon: Shield, name: 'Segurança', description: 'Proteção de dados pessoais com criptografia de ponta.' },
  { icon: CheckCircle, name: 'Usabilidade', description: 'Interface intuitiva e simplificada para todos os usuários.' },
];

const Quality = () => (
  <section id="quality" className="bg-white py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
          Uma plataforma que você pode confiar
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Construído com base em requisitos sólidos para garantir a melhor experiência.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nonFunctionalReqs.map((req) => (
          <div key={req.name} className="text-center p-6">
            <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
              <req.icon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{req.name}</h3>
            <p className="mt-4 text-gray-700">{req.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// --- Footer ---
const Footer = () => (
  <footer className="bg-blue-500 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Logo />
          <p className="mt-4 text-blue-200 max-w-xs">
            Conectando talentos ao futuro
          </p>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-white">Projeto Integrado - 2º Semestre</h4>
          <p className="text-blue-200">Análise e Desenvolvimento de Sistemas</p>
          <p className="text-blue-200">Unisenac - Centro Universitário RS</p>
          <div className="mt-4 text-sm text-blue-900">
            <p>Desenvolvido por:</p>
            <p>Brian da Silva Guterres</p>
            <p>Victor Sczepanski Pereira</p>
            <p>Frederico Marten Brião</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
        <p>&copy; {new Date().getFullYear()} ConnectPro. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);
export default function HomePage() {
  return (
    <div className="bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <Features />
        <Personas />
        <Quality />
      </main>
      <Footer />
    </div>
  );
}