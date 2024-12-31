import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from './components/Doctors';

function App() {
  return (
    <div className="container">
      <div className='header'>
        <h1 className='header'>CLARUS HOSPITAL</h1>
      </div>
      <Doctors />
    </div>

  );
}

export default App;
