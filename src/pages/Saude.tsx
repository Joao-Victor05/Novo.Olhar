
import React from 'react';
import Navigation from '../components/Navigation';
import { Heart, Activity, Brain, Utensils, Moon, Smile } from 'lucide-react';

const Saude = () => {
  const healthAreas = [
    {
      title: 'Atividade Física',
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      content: 'Exercícios regulares fortalecem o corpo, melhoram o humor e aumentam a energia. Encontre atividades que você goste e faça delas parte da sua rotina.',
      tips: [
        'Comece com 30 minutos de caminhada diária',
        'Inclua exercícios de força 2-3 vezes por semana',
        'Pratique alongamentos e flexibilidade',
        'Encontre atividades prazerosas como dança ou esportes'
      ]
    },
    {
      title: 'Alimentação Saudável',
      icon: Utensils,
      color: 'from-green-500 to-emerald-500',
      content: 'Uma alimentação equilibrada fornece os nutrientes necessários para o funcionamento optimal do corpo e mente.',
      tips: [
        'Consuma mais frutas e vegetais',
        'Mantenha-se hidratado bebendo água regularmente',
        'Reduza alimentos processados e açúcar',
        'Faça refeições regulares e balanceadas'
      ]
    },
    {
      title: 'Saúde Mental',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      content: 'Cuidar da mente é fundamental para o bem-estar geral. Pratique autoconhecimento e busque equilíbrio emocional.',
      tips: [
        'Pratique meditação ou mindfulness',
        'Mantenha um diário de gratidão',
        'Busque apoio profissional quando necessário',
        'Cultive relacionamentos positivos'
      ]
    },
    {
      title: 'Qualidade do Sono',
      icon: Moon,
      color: 'from-blue-500 to-cyan-500',
      content: 'O sono reparador é essencial para a recuperação física e mental, afetando diretamente sua qualidade de vida.',
      tips: [
        'Mantenha horários regulares para dormir e acordar',
        'Crie um ambiente propício ao sono',
        'Evite telas antes de dormir',
        'Desenvolva uma rotina relaxante noturna'
      ]
    }
  ];

  const habits = [
    'Beber 8 copos de água por dia',
    'Fazer pausas regulares no trabalho',
    'Praticar respiração profunda',
    'Caminhar na natureza',
    'Limitar tempo nas redes sociais',
    'Expressar gratidão diariamente'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-500 mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Saúde e Bem-estar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cuide do seu corpo e mente com hábitos saudáveis. Descubra estratégias 
              práticas para uma vida mais equilibrada e plena.
            </p>
          </div>
        </div>
      </section>

      {/* Health Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pilares de uma Vida Saudável
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {healthAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.content}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Dicas Práticas:</h4>
                    <ul className="space-y-2">
                      {area.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Habits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Smile className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Hábitos Saudáveis Diários
            </h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Pequenas mudanças diárias podem gerar grandes transformações na sua saúde e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {habits.map((habit, index) => (
              <div
                key={habit}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-white font-medium">{habit}</span>
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
              A Importância do Equilíbrio
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                A saúde verdadeira vai além da ausência de doenças. É um estado de bem-estar 
                físico, mental e social completo. Para alcançar esse equilíbrio, é fundamental 
                adotar uma abordagem holística que considere todos os aspectos da vida.
              </p>
              <p className="mb-4">
                O estresse moderno pode impactar significativamente nossa saúde. Técnicas de 
                relaxamento, como meditação, yoga e respiração profunda, podem ajudar a reduzir 
                os níveis de estresse e promover um estado de calma e clareza mental.
              </p>
              <p>
                Lembre-se: mudanças pequenas e consistentes são mais eficazes do que transformações 
                drásticas e insustentáveis. Comece devagar e seja paciente consigo mesmo durante 
                o processo de construção de novos hábitos saudáveis.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mindfulness e Bem-estar Emocional
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                A prática de mindfulness, ou atenção plena, é uma ferramenta poderosa para 
                melhorar o bem-estar emocional. Ela nos ajuda a estar presentes no momento 
                atual, reduzindo a ansiedade sobre o futuro e as preocupações sobre o passado.
              </p>
              <p className="mb-4">
                Incorpore momentos de mindfulness na sua rotina diária: ao comer, caminhar, 
                ou mesmo durante atividades simples como lavar louça. Essa prática pode 
                transformar tarefas cotidianas em oportunidades de conexão consigo mesmo.
              </p>
              <p>
                A gratidão também é um componente essencial do bem-estar emocional. Reconhecer 
                e apreciar as coisas boas da vida, por menores que sejam, pode melhorar 
                significativamente seu humor e perspectiva geral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Saude;
