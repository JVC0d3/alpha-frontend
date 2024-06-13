import React, { ComponentProps } from 'react';

const SliderImg = ({ className, ...props }: ComponentProps<'img'>) => {
    return (
        <img
            {...props}
            className='w-full h-full object-cover object-center-1/4'
        />
    );
};

export default SliderImg;
