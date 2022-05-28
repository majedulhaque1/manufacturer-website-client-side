import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import "swiper/css";
import { Navigation, Pagination } from 'swiper';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const {data: reviews, isLoading} = useQuery('allReviews',() => fetch('https://cryptic-citadel-18059.herokuapp.com/reviews',{
        method: "GET",
        headers:{
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()) );

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-screen h-auto justify-items-center my-24'>
            <div>
                <h2 className='text-4xl mb-24 text-center text-secondary'>Clients Reviews</h2>
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
                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <Review key={review._id}
                            review={review}></Review>
                        </SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;