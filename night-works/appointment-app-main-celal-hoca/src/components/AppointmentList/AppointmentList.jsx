import React from "react";
import AppointmentStyle from "./AppointmentList.module.css";

function AppointmentList() {
  return (
    <div className={AppointmentStyle.appContainer}>
      <h2 className={AppointmentStyle.appTitle}>Appointment List</h2>
      <div className={AppointmentStyle.insideContainer}>
        <h4 className={AppointmentStyle.doctor}>Doctor</h4>
        <div className={AppointmentStyle.lastContainer}>
          <h4 className={AppointmentStyle.date}>Date</h4>
          <p className={AppointmentStyle.time}>Time</p>
        </div>
        <i
          className={`${AppointmentStyle.icon} fa-regular fa-circle-xmark`}
        ></i>
      </div>
    </div>
  );
}

export default AppointmentList;
