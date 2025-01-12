import React from 'react'
import Card from 'react-bootstrap/Card';
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

import "../App.css"

const Todo = ({ todo, onDeleteTodo }) => {
    const { id, content } = todo;

    const removeTodo = () => {
        onDeleteTodo(id)
    }
    return (
        <div>
            <Card style={{ border: '2px solid blue', marginTop: "0.5rem" }}>
                <Card.Body className='list'>
                    <div>{content}</div>
                    <div>
                        <CiCircleRemove size={30} color='red' onClick={removeTodo} />
                        <CiEdit size={30} color='gold' className='fs-3' />
                    </div>

                </Card.Body>
            </Card>
        </div >
    )
}

export default Todo