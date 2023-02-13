'use client';
import Link from 'next/link';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { usePathname } from 'next/navigation';

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
    const pathName = usePathname();

    const [styleDot, animateDot] = useSpring(
        () => ({ height: '6', width: '6' }),
        [],
    );
    const [showLeftBar, setShowLeftBar] = useState(false);

    useEffect(() => {
        if (showLeftBar) {
            animateDot({
                height: '38px',
                from: {
                    height: '0px',
                    width: '0px',
                },
                config: {
                    duration: 300,
                    mass: 5,
                    friction: 120,
                    tension: 120,
                },
            });
        }
    }, [animateDot, showLeftBar]);

    return (
        <Link
            href={link}
            onMouseEnter={() => setShowLeftBar(true)}
            onMouseLeave={() => setShowLeftBar(false)}
            className={`flex flex-row`}
            onClick={handleClose}
        >
            {showLeftBar ? (
                <animated.div
                    className="border border-2 rounded border-orange-light"
                    style={styleDot}
                ></animated.div>
            ) : null}
            <span
                className={`text-4xl font-light tracking-wide transition-all duration-300 ease-in-out ${
                    showLeftBar ? 'ml-8' : ''
                } ${pathName === link ? 'text-orange-dark' : 'text-white'}`}
            >
                {section}
            </span>
        </Link>
    );
};

export default NavMenuSection;
