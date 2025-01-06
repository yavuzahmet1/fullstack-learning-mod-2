import React, { useState } from "react";

import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import { hastaData, doctorData } from "../helper/Data"

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [magic, setMagic] = useState(true);

  const doctorClick = (id) => {

    setDoctors(doctors.filter((a) => a.id === id));

    setMagic(false)

    setHastalar(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName))

  }

  return (
    <div style={{ display: magic ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {
              doctors.map((dr) => (
                <div>
                  <img
                    src={dr.doctorImg}
                    width="180px"
                    height="150px"
                    className="doctorBtn"
                    alt="img"

                    onClick={() => doctorClick(dr.id)}
                  />
                  <h4>{dr.doctorName}</h4>
                </div>
              ))
            }

          </div>
        </header>
        {!magic && <AddPatient hastalar={hastalar} setHastalar={setHastalar} doctor={doctors} />}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
