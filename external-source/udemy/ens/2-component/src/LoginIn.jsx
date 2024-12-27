import React from 'react'

export const users = [
    {
        username: "Ahmet",
        password: "123"
    },
    {
        username: "Mehmet",
        password: "345"
    }
]
function LoginIn() {


    return (
        <div>
            <div>
                <p>User Name : </p>
                <input type="text" />
            </div>
            <div>
                <p>Password : </p>
                <input type="text" />
            </div>
            <button>Sign In</button>
        </div>

    )
}

export default LoginIn;