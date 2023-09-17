import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="max-w-sm h-36 mt-5 rounded overflow-hidden shadow-lg glassmo">
                {/* <img className="w-full" src={props.img} alt="Probably a fish"/> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-golden text-center text-xl mb-2">
                            {props.title}
                        </div>
                        <p className="text-white text-base text-center">
                            {props.description}
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Card
