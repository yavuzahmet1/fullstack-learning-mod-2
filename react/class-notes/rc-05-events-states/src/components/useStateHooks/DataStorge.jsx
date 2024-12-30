import React, { useState } from 'react'

const DataStorge = () => {
    // const [name, setName] = useState("Ali");
    // const [surname, setSurname] = useState("Güven");
    // const [job, setJob] = useState("Developer")

    const [user, setUser] = useState({
        name: "Mehmet",
        surname: "Yildirim",
        job: "Enginer"
    })

    const update = () => {
        setUser({ ...user, name: "zamir" })
    }

    return (
        <div>
            <h1 className='text-center m-2 bg-warning'>DataStorge</h1>
            <div className='bg-secondary'>
                <p>name : {user.name}</p>
                <p>surname : {user.surname}</p>
                <p>Job : {user.job}</p>
            </div>
            <button onClick={update} className='btn btn-primary m-2'>update</button>

        </div>
    )
}

export default DataStorge