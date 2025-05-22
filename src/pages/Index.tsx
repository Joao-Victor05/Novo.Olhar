
import React from 'react';
import Navigation from '../components/Navigation';
import ImageCarousel from '../components/ImageCarousel';
import ThemeCard from '../components/ThemeCard';
import { Briefcase, TrendingUp, Heart, Map } from 'lucide-react';

const Index = () => {
  const themes = [
    {
      title: 'Empreendedorismo',
      description: 'Descubra como transformar suas ideias em negócios de sucesso. Aprenda estratégias, ferramentas e metodologias para empreender.',
      icon: Briefcase,
      link: '/empreendedorismo',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Plano de Carreira',
      description: 'Desenvolva um plano estratégico para sua carreira profissional. Defina metas, habilidades e passos para alcançar seus objetivos.',
      icon: TrendingUp,
      link: '/plano-carreira',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Saúde',
      description: 'Cuide do seu bem-estar físico e mental. Dicas de alimentação, exercícios, mindfulness e hábitos saudáveis para uma vida plena.',
      icon: Heart,
      link: '/saude',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Mapa Interativo',
      description: 'Explore oportunidades, eventos e recursos na sua região. Conecte-se com a comunidade e descubra novos caminhos.',
      icon: Map,
      link: '/mapa-interativo',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Bem-vindo ao VidaPlena
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Sua plataforma completa para desenvolvimento pessoal e profissional. 
              Explore recursos que irão transformar sua vida.
            </p>
          </div>
          
          <ImageCarousel />
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Nossos Temas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada área foi cuidadosamente desenvolvida para oferecer o melhor conteúdo 
              e ferramentas para seu crescimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((theme, index) => (
              <div
                key={theme.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ThemeCard {...theme} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comece sua jornada hoje mesmo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão transformando suas vidas 
            com nossas ferramentas e conteúdos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Explorar Conteúdos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-pink-400 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold">VidaPlena</span> {/* Will inherit text-white */}
          </div>
          <p className="text-blue-100 mb-4"> {/* Consider changing if contrast is low with pink background, but should be fine */}
            Transformando vidas através do conhecimento e desenvolvimento pessoal.
          </p>
          <p className="text-pink-700 font-medium text-sm">
            © 2024 VidaPlena. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

