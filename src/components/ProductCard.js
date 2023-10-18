import React from 'react';

const ProductCard = (props) => {
    return (
        <>
            <div className="w-full h-full aspect-square gap-4 rounded overflow-hidden shadow-lg glassmo cursor-pointer">
                <div className="h-3/4">
                    <img className="w-full h-full bg-contain" src={props.img} alt="Probably a fish" />
                </div>
                <div className="px-6 py-4 h-1/4 flex justify-center items-center">
                    <div className="font-bold text-black text-center text-xl mb-2">
                        {props.title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
