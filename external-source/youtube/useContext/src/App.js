import React, { useContext } from 'react';
import './App.css';
import Content from './components/Content';

const themes = {
  dark: {
    backgraund: "#383838",
    color: "#fff"
  }
}
const ThemeContext = React.createContext(themes.dark)
function App() {

  return (
    <div className="container">
      <button>Light Theme</button>
      <Content />
    </div>
  );
}

export default App;
