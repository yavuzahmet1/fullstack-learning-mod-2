import React from 'react'
import { useState } from 'react'

const ClaruswayTryIt = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        country: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const showInput = (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
        console.log('Form Values:', formValues); // Konsola yazdırmak için
    };

    return (
        <div>
            <form>
                <div>
                    <p>Name: {formValues.username}</p>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleInputChange}
                    />
                    <br />
                    <p>Email: {formValues.email}</p>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <br />
                    <p>Password: {formValues.password}</p>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                    <br />
                    <p>Country: {formValues.country}</p>
                    <label htmlFor="country">Country:</label>
                    <select
                        id="country"
                        name="country"
                        value={formValues.country}
                        onChange={handleInputChange}
                    >
                        <option value="">Select a country</option>
                        <option value="Turkiye">Turkiye</option>
                        <option value="Germany">Germany</option>
                        <option value="Netherland">Netherland</option>
                        <option value="France">France</option>
                    </select>
                </div>
                <button className="btn" onClick={showInput}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ClaruswayTryIt