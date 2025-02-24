import Header from "./../components/Header";
import AddTodo from "./../components/AddTodo";
import TodoList from "./../components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task";

  interface ITodo{
    id:string;
    isDone:boolean;
    task:string;
  }


  const [todos, setTodos] = useState<ITodo[]>([]);

//   const [todos, setTodos] = useState({
//     id:"",
//     isDone:false,
//     task:""
//   });



  const getTodo = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTodos(data)
  };



//   type AddFn=(task:string)=>Promise<void>
// Bu type bilgisi typescript.d.ts

  const addTodo:AddFn=async(task)=>{
    try {
        await axios.post(url,{task,isDone:false})
        getTodo()
    } catch (error) {
        console.log(error)
    }
  }

  const toggleTodo:ToggleFn=async(todo)=>{
    try {
        await axios.put(`${url}/${todo.id}`,{...todo,isDone:!todo.isDone})
        getTodo()
    } catch (error) {
        console.log(error)
    }
  }

 const deleteTodo:DeleteFn=async(id)=>{
    try {
        await axios.delete(`${url}/${id}`)
        getTodo()
    } catch (error) {
        console.log(error)
    }
 }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default Home;
