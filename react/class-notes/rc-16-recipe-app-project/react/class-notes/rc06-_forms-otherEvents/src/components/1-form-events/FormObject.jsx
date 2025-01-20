import React, { useState } from "react";

const FormObject = () => {
  const [info, setInfo] = useState({ name: "", password: "", country: "" });
  const { name, password, country } = info;

  const handleInfo = (e) => setInfo({ ...info, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(); //? submit eventi'nin doğal davranışını engelle

    alert(`
        name : ${name}
        password : ${password}
        country : ${country}
    `);
    setInfo({ name: "", password: "", country: "" });
  };

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{name} </span>
          </label>
          <input
            onChange={handleInfo}
            type="text"
            className="form-control"
            id="name"
            value={name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{password} </span>
          </label>
          <input
            onChange={handleInfo}
            type="password"
            className="form-control"
            id="password"
            value={password}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{country} </span>
          </label>
          <select
            onChange={handleInfo}
            id="country"
            className="form-select"
            required
            value={country}
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        {/* //! form içerisindeki buttonların type'ı default olarak submittir */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
