import { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import './styles/styles.css';

function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
    </div>
  );
}

export default App;
