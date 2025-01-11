import './App.css';
import axios from "axios";
import { useEffect } from "react"


const BASE_URL = "https://jsonplaceholder.typicode.com"

function App() {
  const getAllUsers = async () => {
    let res = await axios.get(BASE_URL + "/todos")
    console.log(res.data)
  }

  const updateUser = async (userId, updateUser) => {

    //PUT: veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
  }

  const getUserById = async (userId) => {
    let res = await axios.get(`${BASE_URL}/todos/${userId}`)
    console.log(res.data)

  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data)
  }


  useEffect(() => {
    // getAllUsers()
    // getUserById(3)
    deleteUserById(3)

  })


  return (
    <div className="App">

    </div>
  );
}

export default App;
