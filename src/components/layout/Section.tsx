import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string
}

function Section({ children, className }: SectionProps) {
    return (
        <div className={`flex justify-center w-full h-fit py-4 even:bg-light-gray`}>
            <div className={`flex justify-between items-center w-full md:w-4/5 ${className}`}>{children}</div>
        </div>
    );
}

export default Section;

