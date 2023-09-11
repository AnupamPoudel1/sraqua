import React from 'react';

const Home = () => {
  return (
    <div className='h-screen bgimg flex gap-40 py-10 px-20 justify-center items-center max-lg:flex-col'>
      <div className="flex flex-col items-center w-3/5 pt-10 max-sm:p-0 rounded-lg"> 
        <h1 className='text-7xl font-bold text-center text-white stroke'>
          SR Aqua and Pet House
        </h1>
        <p className='text-sm text-golden text-center font-bold mt-5'>
          Everything your aquatic pet needs under a roof.
        </p>
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
