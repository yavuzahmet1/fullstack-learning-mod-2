import React from 'react'

const HeroSection = ({title,id,overview}) => {
  return (
    <div className="relative h-[50vw]">
      <div className="absolute top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {overview}{" "}
        </p>
      </div>
    </div>
  );
}

export default HeroSection