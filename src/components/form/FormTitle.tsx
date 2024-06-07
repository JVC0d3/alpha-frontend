import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function FormTitle({ children, className }: ComponentProps<'span'>) {
    return (
        <span
            className={twMerge(
                'w-full py-2 bg-dark-blue rounded-md text-center text-white font-semibold text-2xl',
                className,
            )}
        >
            {children}
        </span>
    );
}

export default FormTitle;

