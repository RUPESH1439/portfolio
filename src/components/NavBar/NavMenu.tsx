'use client';
import { FunctionComponent, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BackDrop } from '../UI';
import NavMenuSection from './NavMenuSection';
import { animated, useSpring } from '@react-spring/web';

interface NavMenuProps {
    handleClose: () => void;
    openMenu: boolean;
}

const sections = [
    { key: 'home', section: 'Home', routePath: '/' },
    { key: 'about', section: 'About', routePath: '/about' },
    { key: 'experience', section: 'Experience', routePath: '/experience' },
    { key: 'work', section: 'Work', routePath: '/work' },
    { key: 'contact', section: 'Contact', routePath: '/contact' },
];

const NavMenu: FunctionComponent<NavMenuProps> = ({
    handleClose,
    openMenu,
}) => {
    const [localOpenMenu, setLocalOpenMenu] = useState(openMenu);
    const styles = useSpring({
        from: {
            x: localOpenMenu ? 100 : 1,
            opacity: localOpenMenu ? 0 : 1,
            delay: 1000,
        },
        to: {
            x: localOpenMenu ? 0 : 100,
            opacity: localOpenMenu ? 1 : 0,
            delay: 500,
        },
        config: {
            mass: 1,
            friction: 26,
            tension: 170,
        },
    });
    return (
        <>
            <BackDrop />
            <animated.div
                className="px-20 pt-24 absolute right-0 w-[60%] md:w-[38%] h-screen bg-purple-light z-50 rounded-l-3xl"
                style={styles}
            >
                <button
                    className="absolute top-8 right-14 h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-700 ease-in-out  hover:h-12 hover:w-12 traslate-y-12"
                    onClick={handleClose}
                >
                    <RxCross1 size={20} />
                </button>
                <div className="flex flex-col gap-8">
                    {sections.map(({ key, section, routePath }) => (
                        <NavMenuSection
                            section={section}
                            key={key}
                            link={routePath}
                            handleClose={handleClose}
                        />
                    ))}
                </div>
            </animated.div>
        </>
    );
};

export default NavMenu;
