import { useState, useEffect } from 'react';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import './styles/styles.css';

function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  useEffect(() => {
    document.title = 'Memory Card Game';
  })

  function increaseScore() {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <div className="App min-h-screen bg-red-300">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard increaseScore={increaseScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
