import React from 'react'

const CardDetails = () => {

  return (
    <div className="container text-center mt-4">
      
            <div>
              <h3>{}</h3>
              <img src={""} alt="" width="300px" />
              <h3>{} </h3>
              <h4>{} </h4>
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
         
    </div>
  );
}

export default CardDetails