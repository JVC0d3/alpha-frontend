import { ComponentProps } from 'react';

function SectionText({ children }: ComponentProps<'div'>) {
    return <div className='flex w-full text-center flex-col items-center'>{children}</div>;
}

export default SectionText;
