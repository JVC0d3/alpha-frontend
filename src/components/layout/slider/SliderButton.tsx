import React, { ComponentProps } from 'react';
import { useSwiper } from 'swiper/react';

import {
    IoIosArrowDropleftCircle as ArrowLeft,
    IoIosArrowDroprightCircle as ArrowRight,
} from 'react-icons/io';

interface SliderButtonProps extends ComponentProps<'button'> {
    to: 'next' | 'prev';
}

const SliderButton = ({ to }: SliderButtonProps) => {
    const swiper = useSwiper();
    return (
        <button
            className={`absolute z-20 top-1/2 ${to === 'next' ? 'right-5' : 'left-5'} 
            -translate-y-1/2 w-12 h-12 cursor-pointer text-slate-50`}
            onClick={() =>
                to === 'next' ? swiper.slideNext() : swiper.slidePrev()
            }
        >
            {to === 'next' ? (
                <ArrowRight className='w-full h-full' />
            ) : (
                <ArrowLeft className='w-full h-full' />
            )}
        </button>
    );
};

export default SliderButton;
