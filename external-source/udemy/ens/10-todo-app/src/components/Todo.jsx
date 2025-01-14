import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

import "../App.css"

const Todo = ({ todo, onDeleteTodo, onUpdateTodo }) => {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false)
    }

    const removeTodo = () => {
        onDeleteTodo(id)
    }
    return (
        <div>
            <Card style={{ border: '2px solid blue', marginTop: "0.5rem" }}>
                <Card.Body className='list'>
                    <div>{editable ? <InputGroup size="lg">
                        <Form.Control className='rounded-4'
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                    </InputGroup> : content

                    }</div>
                    <div>
                        <CiCircleRemove size={30} color='red' onClick={removeTodo} />
                        {
                            editable ? <FaCheck onClick={updateTodo} /> : <CiEdit size={30} color='gold' className='fs-3' onClick={() => setEditable(true)} />
                        }


                    </div>

                </Card.Body>
            </Card>
        </div >
    )
}

export default Todo