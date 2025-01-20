import React from 'react'
import {useLocation} from "react-router-dom"
import "./Footer.scss"
const Footer = () => {
  const {pathname} = useLocation()
  return (
    <>
      <footer className={pathname==="/" ? "horizontal" : pathname ==="/contacts" ? "middle" : "vertical"}>
        <div className="social-icons">
          <a href="#twitter" rel="noopener noreferrer" target='true'>
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#facebook" rel="noopener noreferrer" target='true'>
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#instagram" rel="noopener noreferrer" target='true'>
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#github" rel="noopener noreferrer" target='true'>
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div className="copyright">&copy; Copyright 2023</div>
      </footer>
    </>
  );
}

export default Footer