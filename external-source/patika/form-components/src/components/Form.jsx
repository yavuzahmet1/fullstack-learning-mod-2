import React, { useState } from 'react'
import { Button } from "react-bootstrap"

const Form = () => {
    const [form, setForm] = useState({ fullname: "", phoneNumber: "" })
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (

        <form onSubmit={onSubmit}>
            <h1>Contact List</h1>
            <div>
                <input type="text" name='fullname' placeholder='full name'
                    onChange={onChangeInput} />
            </div>
            <div>
                <input type="text" name="phoneNumber" id="" placeholder='phone number'
                    onChange={onChangeInput} />
            </div>
            <Button >Add</Button>
        </form>

    )
}

export default Form