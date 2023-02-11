'use client';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

interface NavMenuSectionProps {
    section: string;
    link: string;
    handleClose: () => void;
}

const NavMenuSection: FunctionComponent<NavMenuSectionProps> = ({
    section,
    link,
    handleClose,
}) => {
    const [showLeftBar, setShowLeftBar] = useState(false);
    return (
        <Link
            href={link}
            onMouseEnter={() => setShowLeftBar(true)}
            onMouseLeave={() => setShowLeftBar(false)}
            className="flex flex-row"
            onClick={handleClose}
        >
            {showLeftBar ? (
                <div className="border border-2 rounded border-orange-light transition-height duration-700 ease-in"></div>
            ) : null}
            <span
                className={`text-4xl text-white font-light tracking-wide transition-all duration-300 ease-in-out ${
                    showLeftBar ? 'ml-8' : ''
                }`}
            >
                {section}
            </span>
        </Link>
    );
};

export default NavMenuSection;
