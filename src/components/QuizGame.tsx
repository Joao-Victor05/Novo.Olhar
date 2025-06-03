
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const QuizGame = () => {
  const questions = [
    {
      question: "Qual é o principal benefício dos jogos para o desenvolvimento pessoal?",
      options: ["Apenas entretenimento", "Desenvolver habilidades cognitivas", "Perder tempo", "Competição"],
      correct: 1
    },
    {
      question: "O que significa 'gamificação'?",
      options: ["Jogar videogames", "Aplicar elementos de jogos em contextos não-lúdicos", "Criar novos jogos", "Competir com outros"],
      correct: 1
    },
    {
      question: "Qual atividade NÃO é considerada lúdica?",
      options: ["Desenhar", "Resolver quebra-cabeças", "Fazer tarefas repetitivas sem propósito", "Tocar um instrumento"],
      correct: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quiz Completo!</h3>
          <div className="text-6xl mb-4">
            {score === questions.length ? '🏆' : score >= questions.length / 2 ? '👏' : '💪'}
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Você acertou {score} de {questions.length} questões
          </p>
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors mx-auto"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Jogar Novamente</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quiz Lúdico</h3>
        <span className="text-sm text-gray-600">
          Questão {currentQuestion + 1} de {questions.length}
        </span>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          {questions[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={`
                w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between
                ${isAnswered
                  ? index === questions[currentQuestion].correct
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : index === selectedAnswer
                    ? 'bg-red-100 border-red-300 text-red-800'
                    : 'bg-gray-100 border-gray-300 text-gray-600'
                  : 'bg-gray-50 border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                }
              `}
            >
              <span>{option}</span>
              {isAnswered && (
                <span>
                  {index === questions[currentQuestion].correct ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : index === selectedAnswer ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : null}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < currentQuestion ? 'bg-green-500' : 
                index === currentQuestion ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
