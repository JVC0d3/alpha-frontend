import React, { ComponentProps } from 'react';
import { SwiperSlide, SwiperSlideProps } from 'swiper/react';

interface SliderSlideProps extends SwiperSlideProps {
    children:
}

const SliderSlide = () => {
    return (
        <SwiperSlide className='w-full h-[50vh] max-h-[640px]'>
            <img
                src={SlideImg}
                alt='Slide'
                className='w-full h-full object-cover object-center-1/4'
            />
        </SwiperSlide>
    );
};

export default SliderSlide;
