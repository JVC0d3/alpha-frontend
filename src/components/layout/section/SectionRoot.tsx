import { ComponentProps } from 'react';

function SectionRoot({ className, children }: ComponentProps<'div'>) {
    return (
        <div className={`flex justify-center w-full h-fit py-4 even:bg-light-gray`}>
            <div className={`flex items-center w-full gap-x-20 md:w-4/5 ${className}`}>{children}</div>
        </div>
    );
}

export default SectionRoot;
