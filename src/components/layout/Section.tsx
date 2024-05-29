import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
}

function Section({ children }: SectionProps) {
    return (
        <div className={`flex justify-center w-full h-fit py-4 even:bg-light-gray`}>
            <div className={`w-full md:w-4/5`}>{children}</div>
        </div>
    );
}

export default Section;

