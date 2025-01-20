import React, { useState } from "react";

import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import {hastaData, doctorData} from "../helper/Data"


const Home = () => {
let [doctors,setDoctors]=useState(doctorData)
const [hastalar, setHastalar] = useState(hastaData);

const[magic,setMagic]=useState(true)


//doktor resmi tıklandığında, doktor dizisi teke (tıklanan doktorla) düşmeli, magic ile stil değişeceği için magic false olmalı, hastalar dizisi, tek kalan doktorun hastaları olmalı
const doctorClick=(dId)=>{
  // tamircilerde sıralama önemliyse,(doctors dizisinin tek elemana düşmesi önce olmalı) ilk olmasını istediğimizi, önce kendisine atayıp sonra tamircinin içine yazmalıyız. yoksa hata alırız
  doctors = doctors.filter((a) => a.id === dId);

  setDoctors(doctors);

  setMagic(false);
// hastalar dizisini, üstte tek kalan doktor dizisindeki doktorla uyuşan hastalarla güncelledik
  setHastalar(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName));
}


  return (
    <div style={{ display: magic ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div>
                <img
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  className="doctorBtn"
                  alt=""
                  style={{ background: magic ? "aqua" : "lightgreen" }}
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: magic ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${magic ? "blue" : "green"} `,
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

{/* magic false ise (doktor dizisi tek elemanlıysa), AddPatient comp. görünsün. hasta ekleyeceğimiz için hastalar ve tamircisi, doktor adıyla kayıt yapılacağı için doctors dizisini yolladık */}
        {!magic && <AddPatient hastalar={hastalar} setHastalar={setHastalar} doctors={doctors}/>}

        
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
