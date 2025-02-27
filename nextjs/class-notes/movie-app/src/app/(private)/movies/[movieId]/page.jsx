import React from 'react'

const MovieDetail = ({params}) => {

    const {movieId}=params
    console.log(movieId);
    
  return (
    <div>Detail page</div>
  )
}

export default MovieDetail;