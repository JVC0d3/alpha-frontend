import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const FormRoot = ({
    children,
    className,
    ...props
}: ComponentProps<'form'>) => {
    return (
        <form {...props} className={twMerge('flex flex-col gap-6', className)}>
            {children}
        </form>
    );
};

export default FormRoot;
