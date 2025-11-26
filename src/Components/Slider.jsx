import React from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper text-white "
      >
        <SwiperSlide>
            <div>
            <img className='w-full h-[500px] object-cover brightness-50' src="/myassets/img1.jpg" alt="" />

            <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
              <h6 className='font-medium text-xl'>Fun & Learning</h6> <br />
              <p className='text-6xl font-bold text-center'>Early Learning Starts <br /> with the Right Toys</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className='w-full h-[500px] object-cover brightness-50' src="/myassets/img2.jpg" alt="" />

            <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
              <h6 className='font-medium text-xl'>Fun & Learning</h6> <br />
              <p className='text-6xl font-bold text-center'>Let Them Dream Big -<br />Toys That Build Imagination</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className='w-full h-[500px] object-cover brightness-50' src="/myassets/img3.jpg" alt="" />

            <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
              <h6 className='font-medium text-xl'>Fun & Learning</h6> <br />
              <p className='text-6xl font-bold text-center'>Unleash Their Imagination -<br /> Creative Toys for Curious Minds</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
    );
};

export default Slider;