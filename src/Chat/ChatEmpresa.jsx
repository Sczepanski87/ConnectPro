import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, Send, Search, Paperclip, Trash, ChevronLeft, User
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
    { name: 'Vagas', href: '/empresa' },
    { name: 'Favoritos', href: '/favoritosempresa' },
    { name: 'Mensagens', href: '/chatempresa' },
  ];

  const isActive = (path) => {
    // Para links da Home (/#...), verifica se estamos na raiz '/'
    if (path.startsWith('/#') || path.startsWith('#')) {
      return location.pathname === '/';
    }
    // Para outras páginas, verifica correspondência exata do caminho
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

const Footer = () => (
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
);

// --- Dados de Exemplo (Mock Data) ---
const initialConversations = [
  { id: 1, name: 'TechCorp', lastMessage: 'Olá! Vimos seu perfil e gostaríamos de...', time: '10:30', avatar: 'https://placehold.co/100x100/1e3a8a/ffffff?text=T' },
  { id: 2, name: 'InovaSoft', lastMessage: 'Parabéns, você avançou para a próx...', time: 'Ontem', avatar: 'https://placehold.co/100x100/059669/ffffff?text=I', unread: 2 },
  { id: 3, name: 'DataSolutions', lastMessage: 'Poderia nos enviar mais detalhes sobr...', time: 'Sexta', avatar: 'https://placehold.co/100x100/7c3aed/ffffff?text=D' },
  { id: 4, name: 'VendeMais', lastMessage: 'Obrigado por se candidatar!', time: 'Sexta', avatar: 'https://placehold.co/100x100/db2777/ffffff?text=V' },
];

const messagesMock = [
  { id: 1, sender: 'company', text: 'Olá! Vimos seu perfil e gostaríamos de marcar uma entrevista.', time: '10:30' },
  { id: 2, sender: 'user', text: 'Olá! Fico muito feliz pelo contato. Tenho disponibilidade na parte da tarde.', time: '10:32' },
  { id: 3, sender: 'company', text: 'Perfeito. Podemos agendar para amanhã, às 14h?', time: '10:33' },
];

export default function ChatUsuario() {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState(initialConversations[0] || null);
  const [messages, setMessages] = useState(messagesMock);
  const [newMessage, setNewMessage] = useState('');

  const deleteConversation = (id) => {
    setConversations(prev => {
      const next = prev.filter(c => c.id !== id);
      // if the deleted conversation was selected, pick next available or null
      setSelectedConversation(prevSelected => {
        if (!prevSelected) return null;
        if (prevSelected.id === id) return next.length ? next[0] : null;
        return prevSelected;
      });
      return next;
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="bg-white font-sans antialiased">
      <Navbar />
      <main className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex h-[calc(100vh-240px)] rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* --- Lista de Conversas (Sidebar) --- */}
            <div className={`w-full md:w-1/3 xl:w-1/4 bg-white border-r border-gray-200 flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
              {/* Header da Sidebar */}
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-blue-900">Mensagens</h2>
              </div>
              {/* Lista de Contatos */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map(convo => (
                  <div
                    key={convo.id}
                    className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === convo.id ? 'bg-gray-100' : ''}`}
                    onClick={() => setSelectedConversation(convo)}>
                    <img src={convo.avatar} alt={convo.name} className="h-12 w-12 rounded-full" />
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{convo.name}</h3>
                        <span className="text-xs text-gray-500 flex-shrink-0">{convo.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-600 truncate">{convo.lastMessage}</p>
                        {convo.unread && (
                          <span className="flex-shrink-0 bg-teal-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {convo.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Janela de Chat Ativa --- */}
            <div className={`w-full md:w-2/3 xl:w-3/4 bg-gray-50 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
              {!selectedConversation ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Selecione uma conversa para começar</p>
                </div>
              ) : (
                <>
                  {/* Header do Chat */}
                  <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
                    <div className="flex items-center">
                      <button
                        className="md:hidden mr-4 text-gray-600 hover:text-gray-900"
                        onClick={() => setSelectedConversation(null)}>
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <img src={selectedConversation.avatar} alt={selectedConversation.name} className="h-10 w-10 rounded-full" />
                      <h3 className="ml-3 text-xl font-bold text-gray-900">{selectedConversation.name}</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                      {selectedConversation && (
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Excluir conversa"
                          onClick={() => deleteConversation(selectedConversation.id)}>
                          <Trash className="h-5 w-5 cursor-pointer" />
                        </button>
                      )}
                    </div>
                  </div>
                  {/* Área de Mensagens */}
                  <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {messages.map(msg => (
                      <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-blue-900 text-white rounded-br-lg' : 'bg-white text-gray-900 rounded-bl-lg border border-gray-200'}`}>
                          <p>{msg.text}</p>
                          <span className="text-xs mt-1 block text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Input de Mensagem */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                      <button type="button" className="text-gray-500 hover:text-blue-900 p-2">
                        <Paperclip className="h-5 w-5 cursor-pointer" />
                      </button>
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <button
                        type="submit"
                        className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-800 transition-colors shadow-lg">
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}