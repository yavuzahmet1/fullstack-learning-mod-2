import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <Link className='link' to="/">Main Page</Link>
            <Link className='link' to="/products">Products</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/contacts">Contact</Link>
        </div>
    )
}

export default Header