import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div><button className='btn btn-success' onClick={() => setFirstName("Halis")}>Cahange Name</button></div>

      <div><button className='btn btn-success mt-5' onClick={() => setLastName("Muhlis")}>Cahange Last LastName</button></div>
      <h1 className="text-center text-primary mt-5">Hello, Bootstrap!</h1>
      <button className="btn btn-success">Click Me</button>
    </>
  );
}

export default App;
