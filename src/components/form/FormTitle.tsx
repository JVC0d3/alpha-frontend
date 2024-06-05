import { ReactNode } from 'react';

interface FormTitleProps {
    children?: ReactNode;
    className?: string;
}

function FormTitle({ children, className }: FormTitleProps) {
    return <span className={`w-full text-center py-2 text-2xl bg-dark-blue ${className}`}>{children}</span>;
}

export default FormTitle;
