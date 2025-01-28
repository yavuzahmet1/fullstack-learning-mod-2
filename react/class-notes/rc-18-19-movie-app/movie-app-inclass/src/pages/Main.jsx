import React, { useContext, useState } from 'react'
import { MovieContextt } from '../context/MovieContext'
import MovieCard from '../components/MovieCard';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const Main = () => {
  const { movies, getMovies } = useContext(MovieContextt);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)

  }

  return (

    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit"
        >
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Main