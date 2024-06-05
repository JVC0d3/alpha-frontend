import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    content?: 'between' | 'around' | 'center' | 'start' | 'end';
}

function Section({ children, className, content = 'between' }: SectionProps) {
    return (
        <div className={`flex justify-center w-full h-fit py-4 even:bg-light-gray`}>
            <div className={`flex justify-${content} items-center w-full md:w-4/5 ${className}`}>{children}</div>
        </div>
    );
}

export default Section;
