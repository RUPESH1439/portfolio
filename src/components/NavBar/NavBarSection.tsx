import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface NavBarSectionProps {
    section: string;
    routePath: string;
}

const NavBarSection: FunctionComponent<NavBarSectionProps> = ({
    section,
    routePath,
}) => {
    const { pathname } = useRouter();
    const isActive = pathname === routePath;
    return (
        <Link
            href={routePath}
            aria-current={isActive ? 'page' : undefined}
            className={`type-nav transition-colors hover:text-primary ${
                isActive ? 'text-primary' : 'text-slate/80'
            }`}
        >
            {section}
        </Link>
    );
};

export default NavBarSection;
