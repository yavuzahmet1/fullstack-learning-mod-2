import './App.css';
import Card from './components/card/Card';
import data from './data';



function App() {
  return (
    <div className="App">
      <h1>LANGUAGES</h1>
      {
        data.map(({ id, language, img }) => (
          < Card key={id} language={language} img={img} />
        ))
      }

    </div>
  );
}

export default App;
