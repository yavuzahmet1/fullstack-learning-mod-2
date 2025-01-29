import React from 'react'
import Counter from './components/counter/Counter'
import Todo from "./components/todo/Todo";
import "./App.css";

const App = () => {
  return (
    <div className="app">
  
        <Counter />
        <Todo/>

    </div>
  );
}

export default App