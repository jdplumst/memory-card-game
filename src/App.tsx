import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import './styles/styles.css';

function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  return (
    <div className="App min-h-screen bg-red-300">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard />
    </div>
  );
}

export default App;
