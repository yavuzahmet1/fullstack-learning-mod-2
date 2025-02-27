import { getirMovies } from '@/helpers/movieFunction'
import React from 'react'
import MovieCard from './MovieCard'

const MovieSection = async({type}) => {

  const movies= await getirMovies(type)

  return (
    <div className="mb-4">
      <p className="text-red-main text-md md:text-xl lg:text-2xl font-semibold mb-4 ">
        {" "}
        {type.toUpperCase()}
      </p>

      <div className='grid grid-flow-col gap-2 overflow-scroll'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSection