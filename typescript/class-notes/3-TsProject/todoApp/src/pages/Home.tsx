
import Header from '../components/Header'
import AppTodo from '../components/AppTodo'
import TodoList from '../components/TodoList'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
    const url="https://67bcb0eaed4861e07b3b94ff.mockapi.io/task/task";

    interface ITodo{
        id:string;
        isDone:boolean;
        task:string;
    }

    const [todos,setTodos]=useState<ITodo[]>([]);

    const getTodo=async()=>{
       
        const {data}=await axios.get(url)
        console.log(data)
        setTodos(data)
    }
    useEffect(()=>{getTodo()},[])

  return (
    <div>
            <Header/>
            <AppTodo/>
            <TodoList todos={todos}/>

    </div>
  )
}

export default Home