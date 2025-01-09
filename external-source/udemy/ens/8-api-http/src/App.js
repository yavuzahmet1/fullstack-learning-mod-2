import './App.css';
import axios from "axios";
import { useEffect } from "react"


const BASE_URL = "https://jsonplaceholder.typicode.com"

function App() {
  const getAllUsers = async () => {
    let res = await axios.get(BASE_URL + "/todos")
    console.log(res.data)
  }
  const getUserById = async (userId) => {
    let res = await axios.get(`${BASE_URL}/todos/${userId}`)
    console.log(res.data)

  }


  useEffect(() => {
    // getAllUsers()
    getUserById(3)
  })


  return (
    <div className="App">

    </div>
  );
}

export default App;
