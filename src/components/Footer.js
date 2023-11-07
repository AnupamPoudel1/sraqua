import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <section className='h-min w-full bg-blue-950 flex justify-center items-center overflow-x-hidden relative bottom-0' id='products'>
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex flex-wrap flex-col justify-center items-center text-white p-4'>
                <div className="flex justify-center items-center text-center">We do not own rights to most of the photos used in the website. Some of the photos were taken from:
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    Photo by <a className='mx-1 border-b border-white' href="https://unsplash.com/@makstron?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel='noreferrer'>Maksym Sirman</a>, <a className='mx-1 border-b border-white' href="https://unsplash.com/@vikram?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel='noreferrer'>Vikram Mudaliar</a>, <a className='mx-1 border-b border-white' href="https://unsplash.com/@kmus07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel='noreferrer'>karl muscat</a> and some other splendid creators on <a className='mx-1 border-b border-white' href="https://unsplash.com" target='_blank' rel='noreferrer'>Unsplash</a>
                </div>
                <div className="w-full flex justify-center items-center font-bold mt-4">
                    <a href='https://www.facebook.com/InfoFish' target='_blank' rel='noreferrer' className="flex flex-col justifty-center items-center transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                        <div className="rounded-full bg-blue-950 text-xl p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                            <BsFacebook className='w-full h-full' />
                        </div>
                    </a>
                    {/* <a href='/' target='_blank' rel='noreferrer' className="flex flex-col justifty-center items-center transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                        <div className="rounded-full bg-blue-950 text-xl p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                            <BsInstagram className='w-full h-full' />
                        </div>
                    </a>
                    <a href='/' target='_blank' rel='noreferrer' className="flex flex-col justifty-center items-center transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                        <div className="rounded-full bg-blue-950 text-xl p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                            <BsTiktok className='w-full h-full' />
                        </div>
                    </a> */}
                    <a href='/' target='_blank' rel='noreferrer' className="flex flex-col justifty-center items-center transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                        <div className="rounded-full bg-blue-950 text-xl p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                            <BsYoutube className='w-full h-full' />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center">Copyrights Reserved &copy;SRAqua</div>
            </div>
        </section>
    )
}

export default Footer
