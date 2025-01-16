import React from 'react'
import data from "../data"

const Card = () => {
  return (
    <div>
      {
        data.map((item) => (
          <div>
            <div>
              <h2>
                {item.title}
              </h2>
              <p>
                {item.body}
              </p>
            </div>
            <img src={`./images/${item.image}`} width={200} alt="img" />
          </div>
        ))
      }


    </div>
  )
}

export default Card