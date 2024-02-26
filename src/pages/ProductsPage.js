import React from 'react';
import ProductsCard from '../components/ui/ProductsCard';
import data from '../api/products.json';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProductsHeader from '../components/ProductsHeader';

const ProductsPage = () => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <section className='h-min w-full bg-white flex flex-col justify-center items-center overflow-x-hidden relative' id='shop'>
            <ProductsHeader />
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex flex-col justify-center items-center text-white relative'>
                <div className='w-full h-full flex items-center justify-center mt-20 md:mt-5 my-5 max-lg:my-5'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 xl:gap-10 z-[1] mt-5">
                            {
                                data.map((item) => {
                                    return (
                                        <ProductsCard
                                            key={item.id}
                                            img={item.image}
                                            title={item.title}
                                            price={item.price}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/' className="fixed bottom-[18%] max-sm:bottom-[15%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1" onClick={handleScroll}>
                    <AiFillHome className='w-full h-full' />
                </div>
                Home
            </Link>
            <a href='https://www.facebook.com/InfoFish' target='_blank' rel='noreferrer' className="fixed bottom-[5%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1">
                    <AiFillMessage className='w-full h-full' />
                </div>
                Chat
            </a>
        </section>
    )
}

export default ProductsPage
