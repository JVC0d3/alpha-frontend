import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const FormLink = ({ className, children, ...props }: LinkProps) => {
    return (
        <Link
            {...props}
            className={twMerge(
                'w-fit hover:underline hover:text-dark-blue',
                className,
            )}
        >
            {children}
        </Link>
    );
};

export default FormLink;
