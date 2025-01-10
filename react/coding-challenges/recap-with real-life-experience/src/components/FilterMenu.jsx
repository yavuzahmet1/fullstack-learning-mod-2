import React, { useState } from 'react'
import data from "../mock/data"

const FilterMenu = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredMenu = selectedCategory === "All"
        ? data
        : data.filter(item => item.category === selectedCategory);




    return (
        <div>

            <h1>Filter Menu</h1>
            <select onChange={(e) => setSelectedCategory(e.target.value)} >
                <option value="All">All</option>
                <option value="Drink">Drink</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
            </select>
            <ul >
                {filteredMenu.map(item => (
                    <li key={item.id}>{item.name}--{item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterMenu