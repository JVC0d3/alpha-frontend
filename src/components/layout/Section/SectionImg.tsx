import { ComponentProps } from 'react';

function SectionImgs({ src }: ComponentProps<'img'>) {
    return <img src={src} className='rounded-lg w-2/3' />;
}

export default SectionImgs;
