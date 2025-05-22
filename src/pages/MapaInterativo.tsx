
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Map, MapPin, Calendar, Users, Search, Filter } from 'lucide-react';

const MapaInterativo = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos', color: 'gray' },
    { id: 'eventos', name: 'Eventos', color: 'blue' },
    { id: 'cursos', name: 'Cursos', color: 'green' },
    { id: 'networking', name: 'Networking', color: 'purple' },
    { id: 'saude', name: 'Saúde', color: 'red' }
  ];

  const locations = [
    {
      id: 1,
      name: 'Centro de Empreendedorismo São Paulo',
      category: 'eventos',
      address: 'Av. Paulista, 1000 - São Paulo, SP',
      description: 'Hub de inovação com eventos semanais para empreendedores',
      nextEvent: 'Workshop de Pitch - 25/05/2024',
      distance: '2.5 km'
    },
    {
      id: 2,
      name: 'Universidade Corporativa Tech',
      category: 'cursos',
      address: 'Rua da Consolação, 500 - São Paulo, SP',
      description: 'Cursos de tecnologia e desenvolvimento profissional',
      nextEvent: 'Curso de Python - 30/05/2024',
      distance: '1.8 km'
    },
    {
      id: 3,
      name: 'Espaço Coworking Inovação',
      category: 'networking',
      address: 'Rua Augusta, 200 - São Paulo, SP',
      description: 'Ambiente colaborativo para profissionais e empresários',
      nextEvent: 'Happy Hour Networking - 27/05/2024',
      distance: '3.2 km'
    },
    {
      id: 4,
      name: 'Clínica de Bem-estar Integral',
      category: 'saude',
      address: 'Av. Rebouças, 800 - São Paulo, SP',
      description: 'Serviços de saúde física e mental',
      nextEvent: 'Palestra sobre Mindfulness - 28/05/2024',
      distance: '4.1 km'
    },
    {
      id: 5,
      name: 'Meetup Desenvolvedores SP',
      category: 'eventos',
      address: 'Rua Bela Cintra, 300 - São Paulo, SP',
      description: 'Encontros mensais da comunidade de desenvolvedores',
      nextEvent: 'React Native Workshop - 02/06/2024',
      distance: '2.8 km'
    },
    {
      id: 6,
      name: 'Instituto de Carreira Profissional',
      category: 'cursos',
      address: 'Av. Faria Lima, 1500 - São Paulo, SP',
      description: 'Cursos e mentorias para desenvolvimento de carreira',
      nextEvent: 'Mentoria de Carreira - 01/06/2024',
      distance: '5.2 km'
    }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesCategory = selectedCategory === 'todos' || location.category === selectedCategory;
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mb-6">
              <Map className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mapa Interativo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra oportunidades, eventos e recursos na sua região. 
              Conecte-se com a comunidade e encontre novos caminhos para seu crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar locais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? `bg-${category.color}-500 text-white`
                      : `bg-${category.color}-100 text-${category.color}-700 hover:bg-${category.color}-200`
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder and Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[500px]">
              <div className="text-center">
                <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Mapa Interativo
                </h3>
                <p className="text-gray-500">
                  Visualização dos locais será exibida aqui
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  {filteredLocations.length} locais encontrados
                </p>
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Locais Encontrados ({filteredLocations.length})
              </h3>
              
              {filteredLocations.map((location) => {
                const colorClass = getCategoryColor(location.category);
                return (
                  <div
                    key={location.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {location.name}
                        </h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${colorClass}-100 text-${colorClass}-700`}>
                        {categories.find(c => c.id === location.category)?.name}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {location.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{location.nextEvent}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {location.distance}
                      </span>
                    </div>
                  </div>
                );
              })}

              {filteredLocations.length === 0 && (
                <div className="text-center py-12">
                  <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Nenhum local encontrado
                  </h3>
                  <p className="text-gray-500">
                    Tente ajustar os filtros ou termo de busca
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Recursos do Mapa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Localização Precisa
              </h3>
              <p className="text-purple-100">
                Encontre locais exatos com endereços e direções detalhadas
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Eventos em Tempo Real
              </h3>
              <p className="text-purple-100">
                Informações atualizadas sobre próximos eventos e atividades
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Comunidade Ativa
              </h3>
              <p className="text-purple-100">
                Conecte-se com pessoas que compartilham seus interesses
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapaInterativo;
