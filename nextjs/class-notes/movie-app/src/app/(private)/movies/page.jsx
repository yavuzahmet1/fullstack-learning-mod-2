import { getirMovies } from "@/helpers/movieFunction";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

export const metadata = {
  title: "Movies Page",
};
const Movies = async () => {
  const movies = await getirMovies("now_playing");
  // console.log(movies);

  return (
    <div>
      {/* herosection nowplaying*/}

      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />

      {/* moviesection nowplaying */}
      {/* moviesection  upcoming*/}
      {/* moviesection top-rated*/}
      {/* moviesection popular*/}

<MovieSection type="now_playing"/>
<MovieSection type="popular"/>
<MovieSection type="top_rated"/>
<MovieSection type="upcoming"/>


    </div>
  );
};

export default Movies;
