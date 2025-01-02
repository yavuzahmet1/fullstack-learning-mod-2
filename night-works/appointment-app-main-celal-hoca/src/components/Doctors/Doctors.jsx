import React from "react";
import { doctorData } from "../../helpers/data";
import DoctorsCard from "./DoctorsCard";
import DoctorsStyle from "./Doctors.module.css";
import Modals from "../Modals/Modals";

function Doctors() {
  return (
    <>
      <div className={DoctorsStyle.cards}>
        {doctorData.map((doctor) => (
          <DoctorsCard
            key={doctor.id}
            name={doctor.name}
            department={doctor.dep}
            image={doctor.img}
          />
        ))}
      </div>
      <div className={DoctorsStyle.modalsCard}>
        <Modals />
      </div>
    </>
  );
}

export default Doctors;
