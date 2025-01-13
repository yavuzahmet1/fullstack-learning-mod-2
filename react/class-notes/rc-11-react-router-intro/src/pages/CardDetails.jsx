import React from 'react'
import { useParams } from 'react-router-dom';
import data from "../data"

const CardDetails = () => {
  //! 1. yol
  const { name } = useParams();


  return (
    <div className="container text-center mt-4">
      {
        data.map(item => item.name === name && (
          <div>
            <h3>{item.name}</h3>
            <img src={item.img} alt="" width="300px" />
            <h3>{item.text} </h3>
            <h4>{ } </h4>
            <div>
              <button
                className="btn btn-warning"

              >
                GO BACK
              </button>
              <button
                className="btn btn-primary"

              >
                GO HOME
              </button>
            </div>
          </div>
        ))

      }


    </div>
  );
}

export default CardDetails