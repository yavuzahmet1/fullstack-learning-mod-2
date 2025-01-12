import React from 'react'


import "../App.css"
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo }) => {

    return (
        <div style={{ width: "90%", margin: "auto", padding: "auto" }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
                ))
            }
        </div>
    )
}

export default TodoList