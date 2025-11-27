import React from 'react';

const NotableMilestone = () => {
    return (
        <div className='relative mb-20'>
            <img className='w-full h-[500px] object-cover brightness-50' src="/myassets/img5.jpg" alt="" />

            <div className='absolute inset-0 text-white flex flex-col justify-center items-center '>
                <h4 className='font-bold text-4xl mt-10'>Notable Milestone</h4>

                <p className='lg:text-xl font-semibold lg:mt-8 text-center mb-10 lg:mb-15'>The invention of a groundbreaking toy, a major shift in toy manufacturing techniques,<br /> or a significant moment in the history of children's play</p>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-40 text-center '>
                    <div className="flex flex-col items-center">
                        <h2 className="w-20 h-20 lg:w-36 lg:h-36 bg-white rounded-full lg:text-5xl flex flex-col justify-center items-center text-orange-500">1,268</h2>
                        <p className="lg:text-2xl font-medium mt-2">Number of Toys</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="w-20 h-20 lg:w-36 lg:h-36 bg-white rounded-full lg:text-5xl flex flex-col justify-center items-center text-orange-500">56+</h2>
                        <p className="lg:text-2xl font-medium mt-2">Types of toys</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="w-20 h-20 lg:w-36 lg:h-36 bg-white rounded-full lg:text-5xl flex flex-col justify-center items-center text-orange-500">2000</h2>
                        <p className="lg:text-2xl font-medium mt-2">Number Of Buyers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="w-20 h-20 lg:w-36 lg:h-36 bg-white rounded-full lg:text-5xl flex flex-col justify-center items-center text-orange-500">260+</h2>
                        <p className="lg:text-2xl font-medium mt-2">Favorite Person</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotableMilestone;