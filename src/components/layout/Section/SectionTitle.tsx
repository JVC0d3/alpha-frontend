import { ComponentProps } from 'react';

function SectionTitle({ children }: ComponentProps<'p'>) {
    return <h1 className='text-4xl text-dark-blue mb-4 font-bold'>{children}</h1>;
}

export default SectionTitle;
