import React from 'react';
import bgVideo from '../assets/bgVideo.mp4';

const Home = () => {
  return (
    <div className='h-screen bgimg flex justify-center gap-40 p-10 max-lg:p-5 items-center max-lg:flex-col max-lg:gap-5'> 
      <div className="flex justify-center items-center flex-col glassmo w-full p-10 rounded-lg">
        <h1 className='text-6xl font-bold text-center text-white max-sm:text-3xl'>
          SR Aqua and Pet House
        </h1>
        <p className='text-sm text-center text-black font-bold mt-5'>
          Everything your aquatic pet needs under a roof.
        </p>
      </div>
      <div className="flex justify-center items-center rounded-lg">
        <video className='bg-cover rounded-lg' autoPlay loop muted>  
          <source src={bgVideo} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Home;
