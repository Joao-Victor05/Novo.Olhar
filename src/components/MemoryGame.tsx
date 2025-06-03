
import React, { useState, useEffect } from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';

const MemoryGame = () => {
  const [cards, setCards] = useState<{ id: number; value: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const cardValues = ['🌟', '🎯', '🎨', '🎮', '🏆', '💡', '🎭', '🎪'];

  const initializeGame = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      setMoves(moves + 1);
      
      if (cards[first].value === cards[second].value) {
        setCards(prev => prev.map(card => 
          card.id === first || card.id === second 
            ? { ...card, isMatched: true }
            : card
        ));
        setScore(score + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards, moves, score]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;
    
    setCards(prev => prev.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, id]);
  };

  const isGameComplete = cards.every(card => card.isMatched);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Jogo da Memória</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Pontos: {score}</span>
          <span className="text-sm text-gray-600">Jogadas: {moves}</span>
          <button
            onClick={initializeGame}
            className="flex items-center space-x-2 bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>
      
      {isGameComplete && (
        <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-lg mb-4 text-center">
          🎉 Parabéns! Você completou o jogo em {moves} jogadas!
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              aspect-square rounded-lg text-2xl font-bold transition-all duration-300
              ${card.isFlipped || card.isMatched
                ? 'bg-white border-2 border-purple-300 shadow-md'
                : 'bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500'
              }
            `}
          >
            {card.isFlipped || card.isMatched ? card.value : '?'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
