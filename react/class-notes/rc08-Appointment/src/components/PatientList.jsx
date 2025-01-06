import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar }) => {

  return (
    <div>
      {
        hastalar.map((patient) => (
          <div>
            <div className={patient.isDone === true ? "falseStyle" : "trueStil"} onDoubleClick={() => setHastalar(hastalar.map((hasta) => hasta.id === patient.id ? { ...patient, isDone: !hasta.isDone } : hasta))}>
              <div>
                <h2>{patient.patientName} </h2>
                <h4>{patient.day} </h4>
                <h3>{patient.myDoctor} </h3>
              </div>

              <FaTimesCircle style={{ color: "red" }}
                onClick={() => setHastalar(hastalar.filter((a) => a.id !== patient.id))}
              />
              {

              }
            </div>
          </div>
        ))
      }

    </div>
  );
};

export default PatientList;
