import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='h-screen bgimg flex gap-40 p-10 justify-center items-center max-lg:flex-col'>
      <div className="flex flex-col justify-center items-center w-3/5 pt-10 max-sm:p-0 rounded-lg absolute mt-10">
        <h1 className='text-7xl font-bold text-center text-white stroke'>
          SR Aqua and Pet House
        </h1>
        <p className='text-sm text-purple rounded-sm bg-golden text-center font-bold mt-5'>
          Everything your aquatic pet needs under a roof.
        </p>
        <div className="mt-10 flex justify-center items-center flex-col">
          <p className='text-sm text-white text-center font-bold mt-5'>
            Visit Our Youtube Channel
          </p>
          <a href='/' className={'hover:bg-golden hover:text-black bg-purple text-white p-5 mt-5 rounded-full flex justify-center items-center transition-all duration-500 font-semibold'}>
            <FaPlay className='text-xl' />
          </a>
        </div>

      </div>
      {/* <div className="flex justify-center items-center rounded-lg">
        <video className='bg-cover rounded-lg' autoPlay loop>  
          <source src={bgVideo} type='video/mp4' />
        </video>
      </div> */}
    </div>
  )
}

export default Home;
