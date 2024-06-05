import { ReactNode } from 'react';

interface TextContent {
    title: string;
    children: ReactNode;
}

function TextContent({ title, children }: TextContent) {
    return (
        <div className='w-1/2'>
            <h1 className='text-4xl text-dark-blue mb-4 font-bold'>{title}</h1>
            <p className='text-lg'>{children}</p>
        </div>
    );
}

export default TextContent;
