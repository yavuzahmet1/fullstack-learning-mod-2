import React, { useEffect, useState } from 'react'


const Counter = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Mehmet");

    useEffect(() => {
        console.log("Component is mounting")
        const countingInterval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return () => clearInterval(countingInterval)
    }, []);

    useEffect(() => {
        console.log("number state is updated!");
    }, [number]);

    useEffect(() => {
        console.log("name state is updated!")
    }, [name])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("Ahmet")}>Click For Name</button>
        </div>
    )
}

export default Counter