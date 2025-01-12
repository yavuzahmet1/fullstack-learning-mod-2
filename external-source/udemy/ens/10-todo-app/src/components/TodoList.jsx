import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import "../App.css"

const TodoList = () => {

    return (
        <div style={{ width: "90%", margin: "auto", padding: "auto" }}>

            <Card style={{ height: "3rem" }}>
                <Card.Body className='list'>
                    <p>Firt Todo</p>
                    <div>
                        <CiCircleRemove size={30} color='red' />
                        <CiEdit size={30} color='gold' className='fs-3' />
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}

export default TodoList