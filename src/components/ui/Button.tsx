import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
    invert?: boolean;
}

function Button({ children, invert = false, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                `h-fit px-6 py-1 transition-all duration-100
                rounded border-2 text-xl font-semibold hover:scale-105`,
                invert
                    ? `border-dark-blue bg-dark-blue text-white 
                    hover:bg-white hover:text-dark-blue`
                    : `border-white bg-white text-dark-blue 
                    hover:bg-dark-blue hover:text-white`,
                className,
            )}
        >
            {children}
        </button>
    );
}

export default Button;

