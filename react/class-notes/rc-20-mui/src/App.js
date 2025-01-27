
import './App.css';
import CardGrid from './components/CardGrid';

import Navbar from './components/Navbar';
import TextFields from './components/TextFields';
// import TypoButtons from './components/TypoButtons';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TypoButtons /> */}
      {/* <TextFields /> */}
      <CardGrid />
    </div>
  );
}

export default App;
