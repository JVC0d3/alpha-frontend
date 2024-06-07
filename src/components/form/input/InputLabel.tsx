import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function InputLabel({ className, children, ...props }: ComponentProps<'label'>) {
    return (
        <label
            {...props}
            className={twMerge('w-fit break-words text-wrap text-dark-blue font-medium cursor-text', className)}
        >
            {children}
        </label>
    );
}

export default InputLabel;

