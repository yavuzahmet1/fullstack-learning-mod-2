import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar }) => {

  
    // child a ve parent a aynı anda onclick verilemez, birine onDoubleClick verilebilir. 
    // hastalardan birine çift tıklayınca, hastalar dizisinden tıklananı map ile bulup, o elemanın diğer key lerini ... ile değiştirmeden, sadece isDone ını override ettik, değiştirdik
    //silme olayı database yoksa filterla yapılır, dizide filterla dolaş tıklamadıklarım kalsın
    
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
