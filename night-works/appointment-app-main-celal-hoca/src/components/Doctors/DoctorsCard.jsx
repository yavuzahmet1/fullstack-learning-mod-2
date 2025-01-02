import React from "react";
import Cards from "./DoctorsCard.module.css";

function DoctorsCard({ name, department, image }) {
  return (
    <div className={Cards.card}>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <h5>{department}</h5>
    </div>
  );
}

export default DoctorsCard;
