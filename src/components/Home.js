import React from 'react';
import bgVid from '../assets/bgvid1.mov';

const Home = () => {
  return (
    <div className='h-screen relative'>
      <video className='bg-video' autoPlay loop muted>
        <source src={bgVid} type='video/mp4'/>
      </video>
      <div className="absolute topnleft flex justify-center items-center flex-col glassmo p-10 width max-sm:top-[30%] max-sm:w-4/5 rounded-lg">
        <h1 className='text-6xl font-bold text-white max-sm:text-3xl'>
          SR Aqua and Pet House
        </h1>
        <p className='text-base text-black font-normal mt-5'>
          Everything your aquatic pet needs under a roof.
        </p>
      </div>
    </div>
  )
}

export default Home;
