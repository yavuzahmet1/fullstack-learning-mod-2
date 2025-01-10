import React from 'react'
import data from "../mock/data"

const DisplayMenu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}--{item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayMenu