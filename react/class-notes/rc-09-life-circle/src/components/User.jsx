import React, { useEffect, useState } from 'react'
import axios from "axios"

const User = () => {
    const [user, setUser] = useState();
    const getUser = async () => {
        try {
            const result = await axios.get("https://randomuser.me/api/");
            setUser(result.data.results[0])
            console.log(result.data.results[0])
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(user)
    useEffect(() => {
        getUser();
    }, [])
    // getUser()


    return (
        <div>
            <img src="" alt="" />
            <p>Hi, My name is</p>
            <h2>User Name: {user.name.first}</h2>
            <h4>email</h4>
            <h5>d. tarihi</h5>
            <h5>Sehir</h5>
            <h5>Tel : </h5>
            <button className='btn btn-warning'>New User</button>

        </div>
    )
}

export default User