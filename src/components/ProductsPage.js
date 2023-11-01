// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import data from './products.json';

// const ProductsPage = () => {

//     return (
//         <div className='min-h-screen pb-8 flex justify-center items-center flex-col bg-golden'>
//             <div className="pt-14 pb-2 mt-5">
//                 <h1 className='text-center text-3xl text-purple'>OUR PRODUCTS</h1>
//             </div>
//             <div className="mt-2">
//                 <p className='text-center text-base text-white w-full px-5 sm:px-14 lg:px-24 pb-4'>This is currently a static page. Buying products from this page is currently not available. We are working on a full e-commerce website. If you want to buy our products please contact us via Contact page or visit the store personally.</p>
//             </div>
//             <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 xl:gap-10 ">
//                 {
//                     data.map((item) => {
//                         return (
//                             <ProductCard key={item.id} img={item.image} title={item.title} />
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default ProductsPage
