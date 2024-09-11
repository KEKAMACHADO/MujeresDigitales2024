import React, { useState } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

const App = () => {
  const categories = ['Animal', 'Color', 'País', 'Comida'];
  const [letter, setLetter] = useState('');
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState([]);

  const startGame = () => {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    setLetter(randomLetter);
    setAnswers({});
  };

  const submitAnswers = (newAnswers) => {
    setAnswers(newAnswers);
    calculateScores(newAnswers);
  };

  const calculateScores = (newAnswers) => {
    // Lógica para calcular puntajes
  };

  return (
    <div>
      <h1>Juego Stop</h1>
      <button onClick={startGame}>Iniciar Juego</button>
      {letter && <h2>Letra: {letter}</h2>}
      <GameBoard categories={categories} onSubmit={submitAnswers} letter={letter} />
      <ScoreBoard scores={scores} />
    </div>
  );
};

export default App;
