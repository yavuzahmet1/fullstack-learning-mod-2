import React from 'react'
import { useState } from 'react';

const FormEvents = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <h1>***************</h1>
            <h2>FormEvents</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name: <span className="text-danger">{name} </span>
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input type="datetime-local" className="form-control" id="date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <select id="country" className="form-select">
                        <option>COUNTRIES</option>
                        <option value="Türkiye">TÜRKİYE</option>
                        <option value="Almanya">GERMANY</option>
                        <option value="Amerika">USA</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormEvents