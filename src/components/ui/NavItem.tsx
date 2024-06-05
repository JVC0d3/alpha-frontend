import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    to: string;
    icon: ReactNode;
    children: string;
}

function NavItem({ to, children, icon }: NavItemProps) {
    return (
        <Link
            to={to}
            className={`flex items-center gap-x-2 transition-all
            border-transparent border-b-2 hover:border-white
            transform hover:scale-105
            [&>*:first-child]:w-6 [&>*:first-child]:h-6`}
        >
            {icon}
            {children}
        </Link>
    );
}

export default NavItem;
