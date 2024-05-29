import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    handleOnClick?: MouseEventHandler;
    to?: string;
    children: ReactNode | string;
    invert?: boolean;
}

function Button({ handleOnClick, to, children, invert = false }: ButtonProps) {
    const navigate = useNavigate();

    function handleClick(e: MouseEvent) {
        e.preventDefault();

        if (to) {
            navigate(to);
        } else if (handleOnClick) {
            handleOnClick(e);
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`h-fit px-6 py-1 transition-all duration-100
            rounded border-2 text-xl font-semibold hover:scale-105
            ${
                invert
                    ? `border-dark-blue bg-dark-blue text-white 
                    hover:bg-white hover:text-dark-blue`
                    : `border-white bg-white text-dark-blue 
                    hover:bg-dark-blue hover:text-white`
            }`}
        >
            {children}
        </button>
    );
}

export default Button;

