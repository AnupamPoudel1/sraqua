import React from 'react';
import { TbMail } from 'react-icons/tb';
import {TbMapPinFilled} from 'react-icons/tb';
import { SlScreenSmartphone } from 'react-icons/sl';
// import { GrMapLocation } from 'react-icons/gr';

const Contact = () => {
    return (
        <div className='relative h-screen w-full flex justify-center items-center flex-col bg-purple'>
            <div className="absolute top-4 z-10 py-3">
                <h1 className='text-center text-3xl text-golden bg-black p-2 rounded font-bold'>CONTACT US</h1>
            </div>
            <div className="absolute left-[5%] sm:top-[50%] -translate-y-[50%] top-[75%] z-10 bg-white">
                <h1 className='text-center text-xl text-golden bg-black p-2 font-bold'>Contact Info</h1>
                <div className="text-base p-3 flex items-center">
                    <div className="text-purple items-center">
                        <TbMail className='mr-4 text-3xl' />
                    </div>
                    <div className="mail text-black">
                        <p className="text-golden">E-mail</p>
                        <p className='text'>sraqua@gmail.com</p>
                    </div>
                </div>
                <div className="text-base p-3 flex items-center">
                    <div className="text-purple items-center">
                        <SlScreenSmartphone className='mr-4 text-3xl' />
                    </div>
                    <div className="mail text-black">
                        <p className="text-golden">Phone no.</p>
                        <p className='text'>9860679848</p>
                        <p className='text'>9818607539</p>
                    </div>
                </div>
                <div className="text-base p-3 flex items-center">
                    <div className="text-purple items-center">
                        <TbMapPinFilled className='mr-4 text-3xl' />
                    </div>
                    <div className="mail text-black">
                        <p className="text-golden">Location</p>
                        <p className='text'>Tenzing Chowk, Kapan</p>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.648093281081!2d85.35362577936608!3d27.72814962760981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf6cbcdabf1%3A0xfed1d268b3e8ecb0!2sS.R%20Aqua%20and%20Pet%20House!5e0!3m2!1sen!2snp!4v1697608613667!5m2!1sen!2snp" className='absolute h-full w-full grayscale invert' loading="lazy" title='google-maps'></iframe>
        </div>
    )
}

export default Contact
