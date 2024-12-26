import './App.css';
import User from './components/User';


function App() {
  const friends = [
    {
      id: 100,
      name: "Ahsen"
    },
    {
      id: 101,
      name: "Taha"
    },
    {
      id: 102,
      name: "Gokhan"
    },
    {
      id: 103,
      name: "Cem"
    }
  ]
  return (
    <div className="App">
      <User
        name="Ahmet"
        surname="Zamir"
        age={new Date().getFullYear() - 1987}
        isLoggedIn={true}
        friends={friends} />
    </div>
  );
}

export default App;
