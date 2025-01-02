import React from "react";
import HeaderStyle from "./Header.module.css";

function Header() {
  return (
    <div className={HeaderStyle.header}>
      <h1 className={HeaderStyle.mainTitle}>Clarus Hospital</h1>
      <h2 className={HeaderStyle.secondTitle}>Doctors</h2>
    </div>
  );
}

export default Header;
