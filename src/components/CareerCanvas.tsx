
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Palette, Target, Users, Lightbulb, Star, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CareerCanvas = () => {
  const { toast } = useToast();
  const [canvasData, setCanvasData] = useState({
    valueProposition: '',
    keyActivities: '',
    keyResources: '',
    costStructure: '',
    revenueStreams: '',
    customerSegments: '',
    channels: '',
    customerRelationships: '',
    keyPartners: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setCanvasData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveCanvas = () => {
    localStorage.setItem('careerCanvas', JSON.stringify(canvasData));
    toast({
      title: "Canvas Salvo!",
      description: "Seu canvas de carreira foi salvo com sucesso.",
    });
  };

  const canvasSections = [
    {
      title: 'Proposta de Valor',
      field: 'valueProposition',
      icon: Star,
      description: 'Que valor único você oferece?',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Atividades-Chave',
      field: 'keyActivities',
      icon: Target,
      description: 'Principais atividades que você executa',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Recursos-Chave',
      field: 'keyResources',
      icon: Lightbulb,
      description: 'Recursos essenciais para seu sucesso',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Segmentos de Clientes',
      field: 'customerSegments',
      icon: Users,
      description: 'Para quem você cria valor?',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Canais',
      field: 'channels',
      icon: Palette,
      description: 'Como você alcança seus clientes?',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Relacionamento',
      field: 'customerRelationships',
      icon: Users,
      description: 'Tipo de relacionamento com clientes',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Parcerias-Chave',
      field: 'keyPartners',
      icon: Users,
      description: 'Parceiros estratégicos',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Estrutura de Custos',
      field: 'costStructure',
      icon: Target,
      description: 'Principais custos do seu modelo',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Fontes de Receita',
      field: 'revenueStreams',
      icon: Star,
      description: 'Como você gera renda?',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Canvas de Carreira</h3>
          <p className="text-gray-600">Visualize e planeje seu modelo de carreira pessoal</p>
        </div>
        <button
          onClick={saveCanvas}
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Salvar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {canvasSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.field} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-base">
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
                <p className="text-xs text-gray-600">{section.description}</p>
              </CardHeader>
              <CardContent>
                <textarea
                  value={canvasData[section.field as keyof typeof canvasData]}
                  onChange={(e) => handleInputChange(section.field, e.target.value)}
                  placeholder={`Descreva ${section.title.toLowerCase()}...`}
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CareerCanvas;
