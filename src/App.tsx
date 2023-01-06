import { useState } from 'react';
import Header from './components/Header';
import './styles/styles.css';

function App() {
  const [score, setScore] = useState<Number>(0);
  const [bestScore, setBestScore] = useState<Number>(0);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
