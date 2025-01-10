import React, { useState } from 'react'
import data from "../mock/data"

const SortMenu = () => {
    const [sortKey, setSortKey] = useState("price");

    const sortMenu = [...data].sort((a, b) => sortKey === "price" ? a.name - b.price
        : a.name.localeCompare(b.name))
    return (
        <div>
            <h1>Sort Menu</h1>
            <select name="" id="" onChange={(e) => setSortKey(e.target.value)}>
                <option value="price">Price</option>
                <option value="name">Name</option>

            </select>
            <ul>
                {sortMenu.map((item) => (
                    <li key={item.id}>
                        {item.name} -- {item.price}$
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortMenu