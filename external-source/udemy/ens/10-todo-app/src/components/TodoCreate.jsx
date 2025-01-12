import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "../App.css"

const TodoCreate = ({ onCreateTodo }) => {
    const [newTodo, setNewTodo] = useState("")
    const createTodo = (e) => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 20000),
            content: newTodo
        }
        onCreateTodo(request)
    }
    return (
        <div className='todo-create'>
            <h1>Todo App</h1>
            <InputGroup size="lg">
                <Form.Control className='rounded-4'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Enter Todo...'
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </InputGroup>
            <Button
                className='btn'
                variant="warning"
                onClick={createTodo}>Todo Create</Button>
        </div>
    )
}

export default TodoCreate