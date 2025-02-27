import { getirMovieDetail, getirYoutubeKey } from '@/helpers/movieFunction';
import Link from 'next/link';
import React from 'react'
import VideoSection from '../components/VideoSection';

const MovieDetail = async({params}) => {

    const {movieId}=params
  
  const detail= await getirMovieDetail(movieId)


    const videoKey=  await getirYoutubeKey(movieId)


  return (
    <div className="md:container px-10 mx-auto py-7">
      <h1 className="text-center text-white text-3xl">{detail.title} </h1>
      <p className="text-center text-white text-xl">{detail.tagline} </p>

<VideoSection videoKey={videoKey}/>

      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
          href="/movies"
        >
          GO BACK
        </Link>
      </div>
    </div>
  );
}

export default MovieDetail;