import React, { useState } from 'react'
import menu from "../mock/data"

const SearchBar = () => {
    const [search, setSearch] = useState('')

    const filteredMenu = menu.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <h1>Search Menu</h1>
            <input type="text"
                placeholder="Ne vereyim abime ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredMenu.map((item) => (
                    <li key={item.id}>
                        {item.name} -- {item.price}$
                    </li>
                ))}
            </ul>

        </div>




    )

}

export default SearchBar