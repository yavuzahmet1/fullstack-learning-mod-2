import React from 'react'



const Course = ({ course }) => {
    const { title, image, description, link, price } = course
    return (
        <div className='card-container'>
            <div className='card'>
                <img src={image} alt="img" />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <a href={link}>Purhase</a>
            </div>
        </div>
    )
}

export default Course