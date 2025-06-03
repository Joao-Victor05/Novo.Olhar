
import React, { useState, useEffect } from 'react';
import { Lightbulb, RotateCcw } from 'lucide-react';

const WordGame = () => {
  const words = [
    { word: 'CRIATIVIDADE', hint: 'Capacidade de criar e inovar' },
    { word: 'DIVERSAO', hint: 'O que buscamos nos jogos' },
    { word: 'APRENDIZADO', hint: 'Processo de adquirir conhecimento' },
    { word: 'CONQUISTA', hint: 'Resultado de um esforço bem-sucedido' },
    { word: 'DESAFIO', hint: 'Situação que testa nossas habilidades' }
  ];

  const [currentWord, setCurrentWord] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const maxWrongGuesses = 6;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const currentWordData = words[currentWord];
  const wordProgress = currentWordData.word
    .split('')
    .map(letter => guessedLetters.includes(letter) ? letter : '_')
    .join(' ');

  useEffect(() => {
    const isWordComplete = currentWordData.word
      .split('')
      .every(letter => guessedLetters.includes(letter));
    
    if (isWordComplete) {
      setGameStatus('won');
    } else if (wrongGuesses >= maxWrongGuesses) {
      setGameStatus('lost');
    }
  }, [guessedLetters, wrongGuesses, currentWordData.word]);

  const handleLetterGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameStatus !== 'playing') return;
    
    setGuessedLetters([...guessedLetters, letter]);
    
    if (!currentWordData.word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const nextWord = () => {
    if (currentWord + 1 < words.length) {
      setCurrentWord(currentWord + 1);
      setGuessedLetters([]);
      setWrongGuesses(0);
      setShowHint(false);
      setGameStatus('playing');
    }
  };

  const resetGame = () => {
    setCurrentWord(0);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setShowHint(false);
    setGameStatus('playing');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Jogo de Palavras</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-2 bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <Lightbulb className="h-4 w-4" />
            <span>Dica</span>
          </button>
          <button
            onClick={resetGame}
            className="flex items-center space-x-2 bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {showHint && (
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-lg mb-4">
          💡 Dica: {currentWordData.hint}
        </div>
      )}

      <div className="text-center mb-6">
        <div className="text-3xl font-mono font-bold text-gray-800 mb-4 tracking-wider">
          {wordProgress}
        </div>
        <div className="text-sm text-gray-600">
          Erros: {wrongGuesses}/{maxWrongGuesses} | Palavra {currentWord + 1} de {words.length}
        </div>
      </div>

      {gameStatus === 'won' && (
        <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-lg mb-4 text-center">
          🎉 Parabéns! Você descobriu a palavra!
          {currentWord + 1 < words.length && (
            <button
              onClick={nextWord}
              className="ml-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
            >
              Próxima Palavra
            </button>
          )}
        </div>
      )}

      {gameStatus === 'lost' && (
        <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-lg mb-4 text-center">
          😞 Que pena! A palavra era: {currentWordData.word}
        </div>
      )}

      <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => handleLetterGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
            className={`
              aspect-square rounded-lg font-bold transition-all duration-200
              ${guessedLetters.includes(letter)
                ? currentWordData.word.includes(letter)
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-purple-200 text-gray-800'
              }
              ${gameStatus !== 'playing' ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WordGame;
