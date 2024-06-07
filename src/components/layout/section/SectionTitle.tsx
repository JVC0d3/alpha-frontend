import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

interface SectionTitleProps extends ComponentProps<'h1'> {
    link?: boolean;
    to?: string;
}

function SectionTitle({ children, link = false, to }: SectionTitleProps) {
    return (
        <>
            {link && to ? (
                <Link to={to} className='text-4xl text-dark-blue mb-4 font-bold hover:scale-105 hover:underline'>
                    {children}
                </Link>
            ) : (
                <h1 className='text-4xl text-dark-blue mb-4 font-bold'>{children}</h1>
            )}
        </>
    );
}

export default SectionTitle;

