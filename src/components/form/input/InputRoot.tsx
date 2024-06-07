import { ComponentProps } from 'react';

function InputRoot({ children }: ComponentProps<'div'>) {
    return <div className='flex flex-col'>{children}</div>;
}

export default InputRoot;

