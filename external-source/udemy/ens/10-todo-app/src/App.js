import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((item) => item.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos])
  }

  return (
    <div className="App">
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} />
    </div>
  );
}

export default App;
