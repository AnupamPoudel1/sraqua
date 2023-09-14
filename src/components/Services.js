import React from 'react';
import bgvideo from '../assets/bgvideo.mp4';

const Services = () => {
  return (
    <div className='h-max pb-14 flex items-center flex-col bg-black'>
      <div className="py-14">
        <h1 className='text-center text-3xl text-golden'>OUR SERVICES</h1>
      </div>
      <div className="h-full gap-10 w-full flex px-10 sm:px-14 lg:px-24 items-center max-sm:justify-center max-lg:flex-col">
        <div className="w-2/5 max-lg:w-full">
          <h1 className='text-center text-purple text-xl'>What We Provide ?</h1>
          <p className="text-base text-justify text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint laborum illum autem provident ratione, libero repudiandae molestias! Odit error quasi quisquam sunt illo cumque eius harum tempora, quis eaque et excepturi officia, soluta, odio sapiente obcaecati nulla ipsa! In voluptatum rem nam quae adipisci, quidem aspernatur incidunt quisquam repellendus voluptates.</p>
        </div>
        <div className="w-2/4 max-lg:w-full">
          <video autoPlay loop>
            <source src={bgvideo} />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Services;
