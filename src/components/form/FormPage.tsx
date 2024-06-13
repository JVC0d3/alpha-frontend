import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormPageProps extends ComponentProps<'div'> {
    current: number;
    page: number;
}

const FormPage = ({ children, className, current, page }: FormPageProps) => {
    return (
        <>
            {current === page && (
                <div className={twMerge('flex flex-col gap-6', className)}>
                    {children}
                </div>
            )}
        </>
    );
};

export default FormPage;
