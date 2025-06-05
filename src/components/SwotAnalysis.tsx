
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, AlertTriangle, Shield, Target, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SwotAnalysis = () => {
  const { toast } = useToast();
  const [swotData, setSwotData] = useState({
    strengths: [''],
    weaknesses: [''],
    opportunities: [''],
    threats: ['']
  });

  const handleItemChange = (category: keyof typeof swotData, index: number, value: string) => {
    setSwotData(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => i === index ? value : item)
    }));
  };

  const addItem = (category: keyof typeof swotData) => {
    setSwotData(prev => ({
      ...prev,
      [category]: [...prev[category], '']
    }));
  };

  const removeItem = (category: keyof typeof swotData, index: number) => {
    if (swotData[category].length > 1) {
      setSwotData(prev => ({
        ...prev,
        [category]: prev[category].filter((_, i) => i !== index)
      }));
    }
  };

  const saveSwot = () => {
    localStorage.setItem('careerSwot', JSON.stringify(swotData));
    toast({
      title: "Análise SWOT Salva!",
      description: "Sua análise SWOT foi salva com sucesso.",
    });
  };

  const swotCategories = [
    {
      title: 'Forças',
      field: 'strengths' as keyof typeof swotData,
      icon: Shield,
      description: 'Pontos fortes internos',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Fraquezas',
      field: 'weaknesses' as keyof typeof swotData,
      icon: AlertTriangle,
      description: 'Pontos fracos internos',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Oportunidades',
      field: 'opportunities' as keyof typeof swotData,
      icon: TrendingUp,
      description: 'Fatores externos positivos',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Ameaças',
      field: 'threats' as keyof typeof swotData,
      icon: Target,
      description: 'Fatores externos negativos',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Análise SWOT</h3>
          <p className="text-gray-600">Análise estratégica da sua carreira e posicionamento profissional</p>
        </div>
        <button
          onClick={saveSwot}
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Salvar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {swotCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.field} className={`${category.bgColor} ${category.borderColor} border-2`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span>{category.title}</span>
                    <p className="text-sm font-normal text-gray-600">{category.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {swotData[category.field].map((item, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleItemChange(category.field, index, e.target.value)}
                        placeholder={`Adicione um item em ${category.title.toLowerCase()}...`}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => removeItem(category.field, index)}
                        className="text-red-500 hover:text-red-700 p-2"
                        disabled={swotData[category.field].length === 1}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addItem(category.field)}
                    className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors"
                  >
                    + Adicionar item
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Dicas para uma boa análise SWOT:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• <strong>Forças:</strong> Habilidades, experiências, conquistas e recursos únicos</li>
          <li>• <strong>Fraquezas:</strong> Áreas que precisam de desenvolvimento e limitações atuais</li>
          <li>• <strong>Oportunidades:</strong> Tendências do mercado, demandas emergentes, conexões</li>
          <li>• <strong>Ameaças:</strong> Concorrência, mudanças no mercado, obsolescência de habilidades</li>
        </ul>
      </div>
    </div>
  );
};

export default SwotAnalysis;
