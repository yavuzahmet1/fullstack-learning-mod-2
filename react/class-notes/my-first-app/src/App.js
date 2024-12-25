import './App.css';
import helloReact from "./assets/react.png"
// import Header from './components/Header.jsx';



function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Header></Header> */}
      <img src={helloReact} alt="img" className="picture" />

    </div>
  );
}

export default App;
