import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

interface SectionImgProps extends ComponentProps<'img'> {
    link?: boolean;
    to?: string;
}

function SectionImg({ src, alt, link, to }: SectionImgProps) {
    return (
        <>
            {link && to ? (
                <Link to={to} className='w-2/3 hover:scale-[1.025]'>
                    <img src={src} className='w-full rounded-lg' alt={alt} />
                </Link>
            ) : (
                <img src={src} className='rounded-lg w-2/3' alt={alt} />
            )}
        </>
    );
}

export default SectionImg;

