import React from 'react';
import PetsCard from './PetsCard';
import bettaFish from '../assets/bettaFish.jpg';
import goldFish from '../assets/goldFish.jpg';
import flowerHorn from '../assets/flowerHorn.jpg';
import clownFish from '../assets/clownFish.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const AquaticPets = (props) => {
    return (
        <section className='h-min w-full bg-blue-950 flex justify-center items-center overflow-hidden relative' id='pets'>
            {/* <div className="absolute bottom-0 left-0 w-full h-36 wave-w wave2"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave-w wave1"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave-w wave3"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave-w wave4"></div> */}
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                <div className='w-full h-full flex items-center justify-center my-20 max-lg:my-12'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        <div className="text-7xl max-lg:text-6xl text-white font-bold">
                            Aquatic Pets
                        </div>
                        <div className="text-base text-white text-center mt-5 w-4/5 max-lg:w-full">
                            Hundreds of beautiful aquatic pets of different types are available in our shop with a wide range of aquariums of your choice. Aquatic plants, vines, corals and other decorations are also available. We also provide fish food, other suppliments, medicines and other various aquarium needs.
                        </div>
                        <div className="w-full px-5 sm:px-14 lg:px-24 z-[1001] mt-10">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={5000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                // removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div><PetsCard img={bettaFish} title="Betta Fish" /></div>
                                <div><PetsCard img={goldFish} title="Gold Fish" /></div>
                                <div><PetsCard img={flowerHorn} title="Flowerhorn Fish" /></div>
                                <div><PetsCard img={clownFish} title="Clown Fish" /></div>
                            </Carousel>
                            {/*
                             <ServiceCard img={decorations} title="Decorations" />
                            <PetsCard img={bettaFish} title="Betta Fish" />
                            <PetsCard img={goldFish} title="Gold Fish" />
                            <PetsCard img={flowerHorn} title="Flowerhorn Fish" />
                            <PetsCard img={clownFish} title="Clown Fish" />
                            <PetsCard img={clownFish} title="Clown Fish" />
                            <PetsCard img={clownFish} title="Clown Fish" />
                            <ServiceCard img={equipments} title="Equipments" />
                            <ServiceCard img={aquaticPets} title="Pets and foods" /> 
                        */}
                        </div>
                    </div>
                    {/* <div className="rounded-md bg-blue-950 w-2/5 h-[90%] text-white hover:text-blue-950 hover:bg-white transition-all duration-300 overflow-hidden">
                        <img src={img} alt="services image" className='h-full w-full object-cover transition-all duration-500' />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default AquaticPets
