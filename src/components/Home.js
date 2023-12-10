import React from 'react';
import Header from './Header';
import Typewriter from 'typewriter-effect';
import About from '../components/About';
import Services from "../components/Services";
import AquaticPets from "../components/AquaticPets";
import Contact from "../components/Contact";
// import Footer from './Footer';
import Shop from "../components/Shop";
import { FaStoreAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='bgimg w-full h-screen flex flex-col items-center overflow-x-hidden' id='home'>
        <Header />
        <div className='w-[90%] max-w-7xl h-screen mt-10 flex justify-center items-center text-white'>
          <div className='w-full h-full flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center w-3/5 h-max text-center">
              <h1 className="text-2xl font-bold text-blue-400 mb-4">
                S.R Aqua and Pet House
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
                <a href="#contact">
                  <button className='bg-blue-950 hover:bg-white hover:text-blue-950 text-xl font-bold py-5 px-10 transition duration-500'>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <AquaticPets />
      <Shop />
      <Contact />
      {/* <Footer className="relative"/> */}
      {/* <Link to='/shop/' className="fixed bottom-[25%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
        <div className="rounded-full bg-white w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1">
          <FaStoreAlt className='w-full h-full' />
        </div>
        Goto Shop
      </Link> */}
      <Link to='/shop/' className="fixed bottom-[25%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
        <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1">
          <FaStoreAlt className='w-full h-full' />
        </div>
        Shop
      </Link>
    </>
  )
}

export default Home
