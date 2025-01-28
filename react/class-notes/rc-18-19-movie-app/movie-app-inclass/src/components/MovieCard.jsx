import React from 'react'

const MovieCard = ({ id, title, overview, poster_path, vote_average }) => {

  return (
    <div className='movie' id='container'>
      <img loading='lazy' src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt=" movie card" />
      <div className='flex align-baseline justify-between p-1 text-white'>
        <h5>{title}</h5>
        <span className='tag green'>{vote_average.toFixed(2)}</span>
        <div className='movie-over'>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard