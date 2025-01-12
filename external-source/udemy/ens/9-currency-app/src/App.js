import './App.css';
import Currency from './components/Currency';
import "./css/currency.css"

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Currency />
    </div>
  );
}

export default App;
