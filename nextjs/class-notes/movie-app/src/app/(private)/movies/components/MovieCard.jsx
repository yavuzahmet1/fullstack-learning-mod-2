
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({vote_average, poster_path,id}) => {
 
 const router=useRouter()
 
    return (
    <div className='w-40 h-[240px] relative cursor-pointer'
    onClick={()=>router.push("/movies/"+id)}
    
    >
    
    <Image
    width={160}
    height={240}
     src={IMG_API+poster_path} alt="" />
    
    <span className='absolute bottom-1 right-1 text-white font-semibold z-10'>
        {vote_average.toFixed(1)}
    </span>
    </div>
  )
}

export default MovieCard