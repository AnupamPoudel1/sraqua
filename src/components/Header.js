import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx';

const Header = () => {

    const [show, setShow] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleCLick = () => {
        console.log("Click handled");
        setDrop(!drop);
    };

    const controlNavbar = () => {
        if (window.scrollY > 25) {
            setShow(true);
        }else{
          setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <nav className={show? "fixed w-full top-0 py-2 px-10 sm:px-14 lg:px-24 flex flex-col justify-center items-center md:py-2 transition-all duration-300 overflow-hidden z-10 glassmo" : "fixed w-full -top-20 transition-all duration-500 overflow-hidden glassmo"}>
            <div className="flex justify-between items-center w-full md:justify-between">
                <div className="logo h-16 w-16 flex items-center justify-start">
                    <a href="/" className='text-xl h-full w-max flex justify-center items-center text-golden'>
                        <img src={logo} alt="logo" className='h-full w-full bg-cover'/>
                    </a>
                </div>
                <div className="max-md:hidden sm:visible text-base w-max flex justify-center items-center text-white">
                    <a href="/" className='mx-7 px-2 w-20 flex justify-center items-center hover:text-golden border-b-2 border-transparent hover:font-bold hover:border-purple transition-all duration-300'>Home</a>
                    <a href="/" className='mx-7 px-2 w-20 flex justify-center items-center hover:text-golden border-b-2 border-transparent hover:font-bold hover:border-purple transition-all duration-300'>Services</a>
                    <a href="/" className='mx-7 px-2 w-20 flex justify-center items-center hover:text-golden border-b-2 border-transparent hover:font-bold hover:border-purple transition-all duration-300'>Products</a>
                    <a href="/" className='mx-7 px-2 w-20 flex justify-center items-center hover:text-golden border-b-2 border-transparent hover:font-bold hover:border-purple transition-all duration-300'>Fish</a>
                    <a href="/" className='mx-7 px-2 w-20 flex justify-center items-center hover:text-golden border-b-2 border-transparent hover:font-bold hover:border-purple transition-all duration-300'>Contact</a>
                </div>
                <div className="relative h-max w-max flex justify-center items-center max-lg:hidden">
                    <button className={'hover:bg-golden hover:text-black bg-purple text-white px-3 py-2 rounded-lg flex justify-center items-center transition-all duration-300 font-semibold'} onClick={handleCLick}>
                        Learn more
                    </button>
                </div>
                <div className="relative h-max w-max flex justify-center items-center md:hidden">
                    <button className={drop ? 'relative -left-96 opacity-0' : 'opacity-100 text-2xl text-white transition-all duration-500'} onClick={handleCLick}>
                        <GiHamburgerMenu />
                    </button>
                    <button className={!drop ? 'absolute -left-96 opacity-0' : 'opacity-100 text-2xl text-white transition-all duration-500'} onClick={handleCLick}>
                        <RxCross1 />
                    </button>
                </div>
            </div>
            <div className={drop && show ? 'overflow-hidden h-max w-11/12 border-2 border-white bg-transparent text-black flex flex-col justify-center items-center rounded-lg my-8 opacity-100 transition-all duration-500 sm:hidden font-bold' : 'absolute opacity-0 text-black -top-52 transition-all duration-500'}>     
                <a href="/" className='py-3 text-base hover:text-white border-b-2 border-white w-full text-center transition-all duration-300'>Home</a>
                <a href="/" className='py-3 text-base hover:text-white border-b-2 border-white w-full text-center transition-all duration-300'>Services</a>
                <a href="/" className='py-3 text-base hover:text-white border-b-2 border-white w-full text-center transition-all duration-300'>Products</a>
                <a href="/" className='py-3 text-base hover:text-white border-b-2 border-white w-full text-center transition-all duration-300'>Fishes</a>
                <a href="/" className='py-3 hover:text-white text-base w-full text-center transition-all duration-300'>Contact</a>
            </div>
        </nav>
    )
}

export default Header;
