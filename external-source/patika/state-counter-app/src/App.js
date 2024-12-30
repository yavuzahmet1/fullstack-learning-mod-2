import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }


  return (
    <div className="App">

      <h1>Counter</h1>
      <h3>{count}</h3>

      <button onClick={increase}>increment</button>
      <button onClick={decrease}>decrement</button>

    </div>
  );
}

export default App;
