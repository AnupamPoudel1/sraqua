import React from 'react';
import Header from './Header';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className='bgimg w-full h-screen flex flex-col items-center overflow-hidden' id='home'>
      <Header />
      <div className='w-[90%] max-w-7xl h-full mt-10 flex justify-center items-center text-white'>
        <div className='w-full h-full flex items-center justify-center'>
          <div className="flex flex-col items-center justify-center w-3/5 h-max text-center">
            <h1 className="text-2xl font-bold text-blue-400 mb-4">
              SR Aqua and Pet House
            </h1>
            <div className="text-7xl max-sm:text-6xl text-white font-bold">
              LOOKING FOR
              <Typewriter
                onInit={(type) => {
                  type.typeString('AN AQUARIUM ?')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('AN AQUATIC PET ?')
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="button mt-20">
              <button className='bg-blue-950 hover:bg-white hover:text-blue-950 text-xl font-bold py-5 px-10 transition duration-500'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
