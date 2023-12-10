import React from 'react';
import ProductsCard from './ProductsCard';
// import Footer from './Footer';
import data from './products.json';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProductsHeader from './ProductsHeader';

const ProductsPage = () => {

    return (
        <section className='h-min w-full bg-white flex flex-col justify-center items-center overflow-x-hidden relative' id='shop'>
            <ProductsHeader />
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex flex-col justify-center items-center text-white relative'>
                {/* <Link to='/' className="absolute top-2 left-2 w-max flex justify-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                    <div className="rounded-full bg-blue-950 w-10 h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300 mr-1">
                        <AiFillHome className='w-full h-full' />
                    </div>
                    Goto Home
                </Link> */}
                <div className='w-full h-full flex items-center justify-center mt-20 my-5 max-lg:my-5'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        {/* <div className="text-2xl max-lg:text-6xl text-blue-950 font-bold">
                            ALL PRODUCTS
                        </div> */}
                        {/* <div className="text-base text-blue-950 text-center mt-5 w-4/5 max-lg:w-full">
                            This page is still under construction, buying products from here is not possible for now. Please visit the store or goto <a href="/" className='text-blue-950 font-bold hover:text-blue-400'>Contact</a> page if you want to buy our products.
                        </div> */}
                        <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 xl:gap-10 z-[1] mt-5">
                            {
                                data.map((item) => {
                                    return (
                                        <ProductsCard key={item.id} img={item.image} title={item.title} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/' className="fixed bottom-[25%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1">
                    <AiFillHome className='w-full h-full' />
                </div>
                Home
            </Link>
            {/* <Footer className="absolute"/> */}
        </section>
    )
}

export default ProductsPage
