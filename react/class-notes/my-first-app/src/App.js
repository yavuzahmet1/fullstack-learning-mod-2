import './App.css';
import helloReact from "./assets/react.png"
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <img src={helloReact} alt="img" className="picture" />
    </div>
  );
}

export default App;
