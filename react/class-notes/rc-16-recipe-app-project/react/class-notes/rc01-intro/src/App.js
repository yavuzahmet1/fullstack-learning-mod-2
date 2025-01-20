import './App.css';
import helloreact from "./assets/react.png"

function App() {
  return (
    <div className="App">
      <h1>React ilk Ders</h1>
        <p>Merhaba</p>
        <img src={helloreact} alt=""  className="hellopicture" />
    </div>
  );
}

export default App;
