import React from 'react';
import ProductsCard from './ProductsCard';
import data from './products.json';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductsHeader from './ProductsHeader';

// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 7
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 6
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 5
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 4
//     }
// };

const CategoryProducts = (props) => {

    const { pCategory } = useParams();

    const filteredData = data.filter((item) => item.category === pCategory);

    return (
        <section className='min-h-screen w-full bg-white flex justify-center items-start overflow-x-hidden relative' id='shop'>
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex flex-col justify-center items-center text-white relative'>
                <Link to='/' className="absolute top-2 left-2 w-max flex justify-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                    <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300 mr-1">
                        <AiFillHome className='w-full h-full' />
                    </div>
                    Goto Home
                </Link>
                <div className='w-full h-full flex items-center justify-center my-5 max-lg:my-5'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        <div className="text-base text-blue-950 text-center mt-5 w-4/5 max-lg:w-full">
                            This page is still under construction, buying products from here is not possible for now. Please visit the store or goto <a href="/" className='text-blue-950 font-bold hover:text-blue-400'>Contact</a> page if you want to buy our products.
                        </div>
                        <ProductsHeader />
                        <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-5 z-[1001] mt-10">
                            {
                                filteredData.map((item) => {
                                    return (
                                        <ProductsCard key={item.id} img={item.image} title={item.title} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryProducts
