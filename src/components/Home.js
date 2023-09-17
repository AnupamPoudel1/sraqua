import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='relative h-screen bgimg flex px-10 sm:px-14 lg:px-24 items-center max-sm:justify-center'>
      <div className="flex flex-col items-center w-2/5 max-sm:w-full max-sm:px-10 rounded-lg absolute mt-10">
        <div className="w-full flex flex-col max-sm:p-0">
          <h1 className='text-7xl font-bold text-purple stroke'>
            SR Aqua and Pet House
          </h1>
          <p className='text-base text-golden rounded-sm font-bold mt-5'>
            Everything your aquatic pet needs under a roof.
          </p>
        </div>
        <div className="mt-10 w-full flex items-center">
          <p className='text-sm text-white font-bold mr-5'>
            Learn more
          </p>
          <a href='/' className={'hover:bg-golden hover:text-black bg-purple text-white p-5 mt-5 rounded-full flex items-center transition-all duration-500 font-semibold bounce'}>
            <FaArrowDown className='text-xl' />
          </a>
        </div>
      </div>
      <div className="absolute flex justify-center items-center left-2/4 -translate-x-2/4 bottom-10 w-max h-max rounded-md glassmo py-5">
        <div className="flex justify-center items-center flex-col ml-10 max-sm:ml-5">
          <p className="text-xl font-bold text-golden">10+</p>
          <p className="text-base text-purple">Brands</p>
        </div>
        <div className="flex justify-center items-center flex-col mx-20 max-sm:mx-5">
          <p className="text-xl font-bold text-golden">100+</p>
          <p className="text-base text-purple">Products</p>
        </div>
        <div className="flex justify-center items-center flex-col mr-10 max-sm:mr-5">
          <p className="text-xl font-bold text-golden">200+</p>
          <p className="text-base text-purple">Customers</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
