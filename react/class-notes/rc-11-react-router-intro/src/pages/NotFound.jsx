import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {

 let navigateee= useNavigate()

  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="500px" />
      <div>
        <button onClick={()=>navigateee("/")} className="btn btn-info">GO HOME</button>
      </div>
    </Container>
  );
};

export default NotFound;
