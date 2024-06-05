import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    invert?: boolean;
}

function Button({ onClick, className, type, to, children, invert = false }: ButtonProps) {
    const navigate = useNavigate();

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        if (to) {
            navigate(to);
        } else if (onClick) {
            onClick(e);
        }
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`w-fit h-fit px-6 py-1 transition-all duration-100
            rounded border-2 text-xl font-semibold hover:scale-105
            ${
                invert
                    ? `border-dark-blue bg-dark-blue text-white 
                    hover:bg-white hover:text-dark-blue`
                    : `border-white bg-white text-dark-blue 
                    hover:bg-dark-blue hover:text-white`
            } ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
