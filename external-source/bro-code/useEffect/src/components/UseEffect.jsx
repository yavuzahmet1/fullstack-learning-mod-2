import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    // const [subractCount, setsubractCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count : ${count}`;
        console.log("My counter program")
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
        <div>

            <p style={{ color: color }}>Count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subractCount}>Subract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div >
    )
}

export default UseEffect