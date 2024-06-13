import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionRoot = ({ className, children }: ComponentProps<'div'>) => {
    return (
        <div
            className={`flex justify-center w-full h-fit py-4 even:bg-light-gray`}
        >
            <div
                className={twMerge(
                    'flex items-center w-full gap-x-20 md:w-4/5',
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default SectionRoot;
