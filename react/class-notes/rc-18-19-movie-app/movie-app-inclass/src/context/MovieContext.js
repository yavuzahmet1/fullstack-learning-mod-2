import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MovieContextt = createContext()

const MovieContext = ({ children }) => {

  const [movies, setMovies] = useState([])

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovies = (API) => {
    axios.get(API).then((res) => setMovies(res.data.results))
  }

  useEffect(() => {
    getMovies(BASE_URL)

  }, [])

  return (
    <MovieContextt.Provider value={{ movies, getMovies }}>
      {children}
    </MovieContextt.Provider>
  )
}

export default MovieContext