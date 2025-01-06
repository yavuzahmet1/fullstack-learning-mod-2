import React from "react";

const AddPatient = () => {

   
  return (
    <div>
      <form >
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
           
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
          
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
