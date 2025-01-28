import React, { useContext } from 'react'
import { AuthContextt } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ id, title, overview, poster_path, vote_average }) => {

  const { currentUser } = useContext(AuthContextt)

  const navigate = useNavigate()

  return (
    <div

      onClick={() => navigate("/details/" + id)}

      className='movie' id='container'>
      <img loading='lazy' src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt=" movie card" />
      <div className='flex align-baseline justify-between p-1 text-white'>
        <h5>{title}</h5>

        {currentUser && (
          <span className={`tag ${vote_average > 7 ? "green" : vote_average > 6.8 ? "orange" : "red"}`}>{vote_average.toFixed(2)}</span>
        )}

        <div className='movie-over'>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div >
  )
}

export default MovieCard