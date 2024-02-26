import React from 'react';
import { useState } from 'react';

const AddProducts = () => {

    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState('');

    return (
        <div className=' w-max h-max flex flex-col items-center justify-center my-5 max-lg:my-5 shadow-xl p-5'>
            <div className="text-3xl max-lg:text-3xl text-blue-950 font-bold mb-5 ">
                Add Prodcut
            </div>
            <div className="form">
                <form action="POST" className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start m-3">
                        <label htmlFor="name" className="text-base text-black my-2">
                            Product name
                        </label>
                        <input
                            type="text"
                            placeholder='eg: Six Seven'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={product}
                            onChange={e => setProduct(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3">
                        <label htmlFor="image" className="text-base text-black my-2">
                            Product image
                        </label>
                        <input
                            type="text"
                            placeholder='eg: https://i.imgur.com/wzN7TJr.jpg'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="category" className="text-base text-black my-2">
                            Category
                        </label>
                        <input
                            type='text'
                            placeholder='eg: Fish Food'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="price" className="text-base text-black my-2">
                            Price
                        </label>
                        <input
                            type='text'
                            placeholder='eg: 600'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="stock" className="text-base text-black my-2">
                            Stock
                        </label>
                        <input
                            type='text'
                            placeholder='eg: 4'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                    <input type='submit' className={"w-60 mt-7 bg-blue-950 text-white transition-all duration-500 p-3 cursor-pointer"} value={"Login"} />
                </form>
            </div>
        </div>
    )
}

export default AddProducts;
