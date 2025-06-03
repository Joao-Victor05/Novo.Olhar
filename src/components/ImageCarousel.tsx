
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://universo.uniateneu.edu.br/wp-content/uploads/2024/06/Empreendedorismo.jpg',
      title: 'Empreendedorismo',
      subtitle: 'Transforme suas ideias em negócios de sucesso',
      link: '/empreendedorismo'
    },
    {
      url: 'https://www.contabeis.com.br/assets/img/news/n_45054_9ba9febf50c076b90b01c75dadd027cc.jpg',
      title: 'Plano de Carreira',
      subtitle: 'Desenvolva sua carreira profissional',
      link: '/plano-carreira'
    },
    {
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop',
      title: 'Ludis',
      subtitle: 'Descubra o poder transformador dos jogos e atividades lúdicas',
      link: '/ludis'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      title: 'Mapa Interativo',
      subtitle: 'Explore oportunidades na sua região',
      link: '/mapa-interativo'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          } ${index < currentIndex ? '-translate-x-full' : ''}`}
        >
          <Link to={image.link} className="block w-full h-full group">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in group-hover:text-rose-200 transition-colors duration-300">
                {image.title}
              </h3>
              <p className="text-lg md:text-xl opacity-90 animate-fade-in group-hover:opacity-100 transition-opacity duration-300">
                {image.subtitle}
              </p>
              <div className="mt-4 inline-flex items-center text-rose-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explorar</span>
                <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Navegação Botões */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
