import React from 'react';
import ProductsCard from './ProductsCard';
import data from './products.json';

const ProductsPage = () => {

    return (
        <div className='h-min w-full bg-white flex justify-center items-center overflow-x-hidden relative' id='products'>
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                <div className='w-full h-full flex items-center justify-center my-5 max-lg:my-5'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        <div className="text-7xl max-lg:text-6xl text-blue-950 font-bold">
                            PRODUCTS
                        </div>
                        <div className="text-base text-blue-950 text-center mt-5 w-4/5 max-lg:w-full">
                            This page is still under construction, buying products from here is not possible for now. Please visit the store or contact us if you want to buy our products.
                        </div>
                        <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-5 z-[1001] mt-10">
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
        </div>
    )
}

export default ProductsPage
