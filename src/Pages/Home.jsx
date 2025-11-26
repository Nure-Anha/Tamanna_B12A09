import React from 'react';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import NotableMilestone from '../Components/NotableMilestone';
import BestSeller from '../Components/LatestProducts';

const Home = () => {
    return (
        <div className='bg-[#f1f6fa]'>
            <title>Home</title>
            
            <Slider></Slider>

            <PopularToys></PopularToys>

            <BestSeller></BestSeller>

            <NotableMilestone></NotableMilestone>
        </div>
    );
};

export default Home;