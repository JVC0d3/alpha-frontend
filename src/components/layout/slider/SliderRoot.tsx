import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SlideImg from '../../../assets/images/eptran-children.png';
import SliderButton from './SliderButton';

const SliderRoot = () => {
    return (
        <div className='relative w-full h-[50vh] max-h-[640px]'>
            <Swiper
                className='z-20 rounded-lg'
                navigation
                slidesPerView={1}
                touchReleaseOnEdges
            >
                <SwiperSlide className='w-full h-[50vh] max-h-[640px]'>
                    <img
                        src={SlideImg}
                        alt='Slide'
                        className='w-full h-full object-cover object-center-1/4'
                    />
                </SwiperSlide>
                <SwiperSlide className='w-full h-[50vh] max-h-[640px]'>
                    <img
                        src={SlideImg}
                        alt='Slide'
                        className='w-full h-full object-cover object-center-1/4'
                    />
                </SwiperSlide>
                <SliderButton to='prev' />
                <SliderButton to='next' />
            </Swiper>
        </div>
    );
};

export default SliderRoot;
