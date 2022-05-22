import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import "swiper/css";
import { Navigation, Pagination } from 'swiper';

const Reviews = () => {
    return (
        <div className='w-screen h-auto justify-items-center py-24'>
            <div>
                <h2 className='text-3xl mb-24 text-center text-secondary'>Clients Reviews</h2>
            </div>
            <div className='w-4/5 mx-auto'>
                <Swiper
                className='px-24'
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                breakpoints={{
                    600:{
                        slidesPerView : 1,
                        spaceBetween : 20,
                    },
                    768:{
                        slidesPerView : 2,
                        spaceBetween : 30,
                    },
                    1024:{
                        slidesPerView : 3,
                        spaceBetween : 40,
                    },
                }}
                >
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review></Review>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;