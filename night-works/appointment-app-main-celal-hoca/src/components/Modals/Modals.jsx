import React from "react";
import ModalStyle from "./Modals.module.css";

function Modals() {
  return (
    <div className={ModalStyle.container}>
      <div className={ModalStyle.inputPart}>
        <h3>Doctor</h3>
        <h5 className={ModalStyle.inputTitle}>Patient Name</h5>
        <input type="text" name="" id="" />
        <h5 className={ModalStyle.inputTitle}>Day & Time</h5>
        <input type="date" name="" id="" />
      </div>
      <div className={ModalStyle.buttons}>
        <button className={ModalStyle.submit}>Submit</button>
        <button className={ModalStyle.close}>Close</button>
      </div>
    </div>
  );
}

export default Modals;
