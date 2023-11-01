import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.jpg';
import { useState } from 'react';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
    }
    return (
        <>
            <div className={show ? "absolute -top-[0%] h-screen w-full bg-blue-950 flex items-center justify-center z-10 transition-all delay-150 duration-300" : "h-screen w-full absolute -top-[100%] bg-blue-950 flex flex-col items-center z-10 transtion-all delay-150 duration-300"}>
                <div className="absolute right-1/2 top-0 translate-x-1/2 h-20 w-20 mt-10">
                    <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                </div>
                <div className='absolute right-32 max-sm:right-10 top-12 text-white cursor-pointer hover:text-blue-400' onClick={handleHide}>
                    <RxCross1 className='mr-2 text-2xl' />
                </div>
                <div className="absolute w-max top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center text-white text-2xl font-bold">
                    <a href="/" className='hover:text-blue-400 mt-5'>Home</a>
                    <a href="/" className='hover:text-blue-400 mt-5'>About</a>
                    <a href="/" className='hover:text-blue-400 mt-5'>Services</a>
                    <a href="/" className='hover:text-blue-400 mt-5'>Aquatic Pets</a>
                    <a href="/" className='hover:text-blue-400 mt-5'>Products</a>
                </div>
            </div>
            <div className='relative w-[90%] max-w-7xl h-max flex justify-center items-center text-xl font-bold text-white'>
                <div className="w-full flex justify-between items-center mt-10">
                    <div className='max-sm:hidden'>
                        +977 986-0679848
                    </div>
                    <div className="flex justify-center items-center text-xl font-bold cursor-pointer hover:text-blue-300" onClick={handleShow}>
                        Menu<RiMenu3Line className='ml-2 text-2xl' />
                    </div>
                </div>
                <div className="absolute right-1/2 top-0 translate-x-1/2 h-20 w-20 mt-10">
                    <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                </div>
            </div>
        </>
    )
}

export default Header
