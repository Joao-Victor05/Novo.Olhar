import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import SkillForm from '../components/SkillForm';
import { TrendingUp, Target, BookOpen, Users, Award, Compass } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PlanoCarreira = () => {
  const { toast } = useToast();
  const [selectedSkill, setSelectedSkill] = useState<null | typeof skills[0]>(null);

  const phases = [
    {
      title: 'Autoconhecimento',
      icon: Compass,
      description: 'Identifique suas habilidades, interesses, valores e objetivos profissionais',
      steps: [
        'Faça uma análise SWOT pessoal',
        'Identifique suas paixões e interesses',
        'Avalie suas competências técnicas e comportamentais',
        'Defina seus valores e propósito de vida'
      ]
    },
    {
      title: 'Definição de Metas',
      icon: Target,
      description: 'Estabeleça objetivos claros e mensuráveis para sua carreira',
      steps: [
        'Defina metas de curto, médio e longo prazo',
        'Use a metodologia SMART para suas metas',
        'Crie um cronograma realista',
        'Estabeleça indicadores de progresso'
      ]
    },
    {
      title: 'Desenvolvimento de Habilidades',
      icon: BookOpen,
      description: 'Invista continuamente em seu crescimento profissional',
      steps: [
        'Identifique gaps de competências',
        'Busque cursos e certificações relevantes',
        'Pratique novas habilidades em projetos',
        'Solicite feedback constante'
      ]
    },
    {
      title: 'Networking e Relacionamentos',
      icon: Users,
      description: 'Construa uma rede de contatos sólida e estratégica',
      steps: [
        'Participe de eventos do seu setor',
        'Mantenha contato com colegas e mentores',
        'Use LinkedIn de forma estratégica',
        'Ofereça ajuda antes de pedir favores'
      ]
    }
  ];

  const skills = [
    {
      name: 'Comunicação Eficaz',
      description: 'Habilidade de transmitir ideias de forma clara e persuasiva, tanto verbal quanto escrita.',
      importance: 'Essencial para liderança, colaboração e crescimento profissional.'
    },
    {
      name: 'Liderança',
      description: 'Capacidade de influenciar, motivar e guiar pessoas em direção a objetivos comuns.',
      importance: 'Fundamental para cargos de gestão e desenvolvimento de equipes.'
    },
    {
      name: 'Inteligência Emocional',
      description: 'Habilidade de reconhecer e gerenciar emoções próprias e dos outros.',
      importance: 'Crucial para relacionamentos saudáveis e tomada de decisões equilibradas.'
    },
    {
      name: 'Pensamento Crítico',
      description: 'Capacidade de analisar informações de forma objetiva e tomar decisões fundamentadas.',
      importance: 'Vital para resolução de problemas complexos e inovação.'
    },
    {
      name: 'Adaptabilidade',
      description: 'Flexibilidade para se ajustar a mudanças e aprender continuamente.',
      importance: 'Indispensável em um mundo de trabalho em constante transformação.'
    },
    {
      name: 'Gestão de Tempo',
      description: 'Habilidade de organizar e priorizar tarefas para maximizar produtividade.',
      importance: 'Essencial para eficiência e equilíbrio entre vida pessoal e profissional.'
    },
    {
      name: 'Trabalho em Equipe',
      description: 'Capacidade de colaborar efetivamente com pessoas diversas.',
      importance: 'Fundamental na maioria dos ambientes de trabalho modernos.'
    },
    {
      name: 'Resolução de Problemas',
      description: 'Habilidade de identificar, analisar e solucionar desafios de forma criativa.',
      importance: 'Competência valorizada em todas as áreas e níveis profissionais.'
    }
  ];

  const handleSkillClick = (skill: typeof skills[0]) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plano de Carreira
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolva um plano estratégico para sua carreira profissional. 
              Defina metas claras e construa o caminho para alcançar seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Fases do Desenvolvimento de Carreira
          </h2>
          
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.title}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:flex-1">
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Habilidades Essenciais do Século XXI
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Clique nas habilidades para criar seu plano de desenvolvimento personalizado
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                onClick={() => handleSkillClick(skill)}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-200 cursor-pointer group"
              >
                <span className="text-white font-medium group-hover:text-green-100 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Como Criar Seu Plano de Carreira Personalizado
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Um plano de carreira eficaz é mais do que uma lista de objetivos profissionais. 
                É um roadmap estratégico que considera suas aspirações pessoais, o cenário do 
                mercado de trabalho e as oportunidades de crescimento em sua área.
              </p>
              <p className="mb-4">
                Comece com uma análise profunda de onde você está hoje e onde quer chegar. 
                Considere não apenas cargos e salários, mas também o tipo de trabalho que 
                te motiva, o ambiente organizacional que você prefere e o impacto que deseja 
                causar através da sua profissão.
              </p>
              <p>
                Revise e ajuste seu plano regularmente. O mundo do trabalho está em constante 
                evolução, e sua carreira deve ser flexível o suficiente para se adaptar a 
                novas oportunidades e desafios.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Navegando pelas Transições de Carreira
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                As transições de carreira são momentos cruciais que exigem planejamento cuidadoso 
                e estratégia. Seja uma mudança de área, promoção ou início da vida profissional, 
                cada transição oferece oportunidades únicas de crescimento.
              </p>
              <p className="mb-4">
                Prepare-se antecipadamente para essas mudanças. Desenvolva habilidades transferíveis, 
                construa uma marca pessoal sólida e mantenha sua rede de contatos atualizada. 
                A preparação é a chave para transições suaves e bem-sucedidas.
              </p>
              <p>
                Lembre-se de que toda carreira tem altos e baixos. Mantenha uma perspectiva 
                de longo prazo e veja os desafios como oportunidades de aprendizado e crescimento 
                pessoal e profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {selectedSkill && (
        <SkillForm
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
};

export default PlanoCarreira;
