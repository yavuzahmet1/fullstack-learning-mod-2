import React from 'react'
import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link style={{ marginRight: "1rem" }} to="employee">Employee</Link>
            <Link to="company">Company</Link>
            <Outlet />
        </div>
    )
}

export default About