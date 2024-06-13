import { ComponentProps } from 'react';

const SectionContent = ({ children }: ComponentProps<'p'>) => {
    return <p className='text-lg'>{children}</p>;
};

export default SectionContent;
