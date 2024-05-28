import React from 'react';

interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    return <div className='w-full h-fit flex justify-center even-child:text-4xl'>{children}</div>;
}

export default Main;
