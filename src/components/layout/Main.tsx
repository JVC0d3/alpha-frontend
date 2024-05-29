import { ReactNode } from 'react';

interface MainProps {
    className?: string;
    children: ReactNode;
}

function Main({ children, className }: MainProps) {
    return (
        <div
            className={`w-full h-fit flex 
            flex-col items-center 
            ${className}`}
        >
            {children}
        </div>
    );
}

export default Main;

