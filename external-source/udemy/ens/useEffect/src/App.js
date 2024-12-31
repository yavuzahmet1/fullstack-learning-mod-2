import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("always works!")
  })
  useEffect(() => {
    console.log("first render changes work!")
  }, []);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state değiştiğinde çalışır")
  }, [firstName])
  useEffect(() => {
    console.log("ilk render edildiğinde ve LastName state değiştiğinde çalışır")
  }, [lastName])
  useEffect(() => {
    console.log("ilk render edildiğinde, firstName ve lastName state değiştiğinde çalışır")
  }, [firstName, lastName])

  return (
    <>
      <div><button onClick={() => setFirstName("Halis")}>Cahange Name</button></div>

      <div><button onClick={() => setLastName("Muhlis")}>Cahange Last LastName</button></div>

    </>
  );
}

export default App;
