import { ComponentProps } from 'react';

function SectionText({ children }: ComponentProps<'div'>) {
    return <div className='w-full text-center flex flex-col'>{children}</div>;
}

export default SectionText;

