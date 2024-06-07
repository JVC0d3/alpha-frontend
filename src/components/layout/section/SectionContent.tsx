import { ComponentProps } from 'react';

function SectionContent({ children }: ComponentProps<'p'>) {
    return <p className='text-lg'>{children}</p>;
}

export default SectionContent;
