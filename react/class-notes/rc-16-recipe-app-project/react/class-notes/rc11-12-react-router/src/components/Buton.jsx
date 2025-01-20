import React from "react";
import { Button } from "react-bootstrap";


const Buton = () => {
  
  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-4 m-2 w-25"
        
      >
        LOGIN
      </Button>
      <Button className="btn btn-danger p-4 m-2 w-25">KAPA</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">SİL</Button>
    </div>
  );
};

export default Buton;
