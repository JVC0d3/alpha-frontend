import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function FormRoot({ children, className }: ComponentProps<'form'>) {
    return <form className={twMerge('flex flex-col gap-6', className)}>{children}</form>;
}

export default FormRoot;

