
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Home, Briefcase, TrendingUp, Heart, Map, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'Empreendedorismo', path: '/empreendedorismo', icon: Briefcase },
    { name: 'Plano de Carreira', path: '/plano-carreira', icon: TrendingUp },
    { name: 'Saúde', path: '/saude', icon: Heart },
    { name: 'Mapa Interativo', path: '/mapa-interativo', icon: Map },
  ];

  const supportLinks = [
    { name: 'Central de Ajuda', href: '#', icon: Phone },
    { name: 'Fale Conosco', href: '#', icon: Mail },
    { name: 'Encontre Apoio', href: '#', icon: MapPin },
  ];

  return (
    <footer style={{ backgroundColor: '#8B008B' }} className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Logo showText={true} className="text-white" />
            <p className="text-pink-100 leading-relaxed">
              Um espaço seguro e acolhedor para mulheres em busca de crescimento pessoal, 
              profissional e bem-estar. Estamos aqui para apoiar sua jornada.
            </p>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-100">Navegação</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="flex items-center text-pink-200 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Suporte e Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-100">Suporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center text-pink-200 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 p-4 bg-pink-900/30 rounded-lg">
              <p className="text-sm text-pink-100">
                <strong>Emergência:</strong> Em situações de risco, ligue 180 (Central de Atendimento à Mulher)
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória e Copyright */}
        <div className="border-t border-pink-400/30 pt-6 text-center">
          <p className="text-pink-200 text-sm">
            © 2024 Novo Olhar. Todos os direitos reservados. 
            <span className="block mt-1">
              Transformando vidas através do acolhimento e desenvolvimento pessoal.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
