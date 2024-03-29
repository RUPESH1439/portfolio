import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavBarSectionProps {
    section: string;
    routePath: string;
}

const NavBarSection: FunctionComponent<NavBarSectionProps> = ({
    section,
    routePath,
}) => {
    return (
        <Link
            href={routePath}
            className="flex flex-row text-xs text-gray font-light hover:text-primary transition hover:ease-in-out delay-5"
        >
            {section}
        </Link>
    );
};

export default NavBarSection;
