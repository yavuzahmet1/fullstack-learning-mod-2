import { useState } from 'react'

const InputExample = () => {
    // const [name, setName] = useState("Ahmet");
    // const [surname, setSurname] = useState("Yavuz");

    // const onChangeName = (e) => setName(e.target.value);
    // const onChangeSurname = (e) => setSurname(e.target.value);

    const [form, setForm] = useState({ name: "", surname: "" })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <p>Please enter a name</p>
            <input name='name' type="text" value={form.name} onChange={onChangeInput} />
            <br />

            <input name='surname' type="text" value={form.surname} onChange={onChangeInput} />
            <h3>{form.name} {form.surname}</h3>
        </div>
    )
}

export default InputExample