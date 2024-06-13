import { ComponentProps } from 'react';

const InputRoot = ({ children }: ComponentProps<'div'>) => {
    return <div className='flex flex-col'>{children}</div>;
};

export default InputRoot;
