import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
    document.title = `Count : ${count} ${color}`;
    useEffect(() => {

        return () => {
            //Some Clean up Code here
        }
    }, [count, color]);


    const addCount = () => {
        setCount(c => c + 1)
    }
    const subractCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green")
    }


    return (
        <div >

            <p className='fw-bold fs-5 m-5' style={{ color: color }}>Count : {count}</p>
            <Button variant="secondary" className='btn btn-secondary m-2' onClick={addCount}>Add</Button>
            <Button className='btn btn-danger' onClick={subractCount}>Subract</Button><br />
            <Button className='btn btn-warning fw-bolder' onClick={changeColor}>Change Color</Button>

        </div >
    )
}

export default UseEffect