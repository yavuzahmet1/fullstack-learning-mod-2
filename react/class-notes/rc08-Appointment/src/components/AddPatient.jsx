import React, { useState } from "react";
import uuid from "react-uuid"

const AddPatient = ({ hastalar, setHastalar, doctors }) => {
  const [inputPatient, setInputPatient] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setHastalar([...hastalar, {
      id: uuid(),
      patientName: inputPatient,
      day: date,
      isDone: true,
      myDoctor: doctors[0].doctorName
    }])

  }


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setInputPatient(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span>{ } </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
