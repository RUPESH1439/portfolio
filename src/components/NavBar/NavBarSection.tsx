'use client';
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
        <a href={routePath} className="flex flex-row">
            <span className="text-xs text-gray font-light hover:text-primary transition hover:ease-in-out delay-5">
                {section}
            </span>
        </a>
    );
};

export default NavBarSection;
