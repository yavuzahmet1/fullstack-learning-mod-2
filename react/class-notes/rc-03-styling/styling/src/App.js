import './App.css';
import Card from './components/card/Card';
import data from './data';



function App() {
  return (
    <div className="App">
      <h1>LANGUAGES</h1>
      {
        data.map(item => (
          < Card key={item.id} language={item.language} img={item.img} />
        ))
      }

    </div>
  );
}

export default App;
