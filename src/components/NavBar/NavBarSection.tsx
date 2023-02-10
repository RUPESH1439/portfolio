'use client';
import { FunctionComponent } from 'react';

interface NavBarSectionProps {
    index: number;
    section: string;
    routePath: string;
}

const NavBarSection: FunctionComponent<NavBarSectionProps> = ({
    section,
    index,
    routePath,
}) => {
    return (
        <a href={routePath} className="flex flex-row gap-1">
            <span className="text-sm text-orange-dark">0{index}.</span>
            <span className="text-sm text-gray font-light hover:text-orange-dark transition hover:ease-in-out delay-5">
                {section}
            </span>
        </a>
    );
};

export default NavBarSection;
