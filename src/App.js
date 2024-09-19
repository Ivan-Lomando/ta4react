import './App.css';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter /> 
    </div>
  );
}

export default App;
