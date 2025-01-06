import React, { useState } from "react";

import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import { hastaData, doctorData } from "../helper/Data"

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [magic, setMagic] = useState(true);

  const doctorClick = (id) => {

  }

  return (
    <div style={{ display: "block" }}>
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

        {/* <AddPatient /> */}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
