import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Ahmet");
  const [surname, setSurname] = useState("Yavuz");
  const [names, setNames] = useState([`mehmet`, `Kamil`, `Zamir`, `Ayse`]);
  const [userInfo, setUserInfo] = useState({
    username: "ayavuz", password: "A123"
  });
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0)

  console.log(names)

  const Increase = () => {
    setCount(count + 1)
  }


  const Decrease = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      {name} {surname}
      <div>

        <button onClick={() => setName("Muhammet")}>Change</button>
      </div>
      <div>
        {
          names.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <hr />
      <div>
        {userInfo.username} {userInfo.password}
      </div>
      <hr />
      <div>
        {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>Don't Show User Info </div>}
        <button onClick={() => setUserInfo(true)}>{!show ? <div>Show</div> : <div>Don't Show</div>}</button>
      </div>
      <hr />
      <div>
        <div>{count}</div>
        <div><button onClick={Increase}>Increase</button></div>
        <div><button onClick={Decrease}>Decrease</button></div>
      </div>

    </div>
  );
}

//!Bir Statenin değerini set methoduyla değiştirdiğimizde component yeniden render edilir.

export default App;
