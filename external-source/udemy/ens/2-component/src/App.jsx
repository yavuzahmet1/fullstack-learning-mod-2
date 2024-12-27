import './App.css';
import LoginIn from './LoginIn';
import { users } from './LoginIn';
import Hello from './Hello';

function App() {
  console.log(users)
  return (
    <div>
      <LoginIn />
      <hr />
      <LoginIn />
      <Hello></Hello>
    </div>

  );
}

export default App;
