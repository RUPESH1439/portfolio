'use client';
import { FunctionComponent, useState } from 'react';
import NavBarSection from './NavBarSection';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import NavMenu from './NavMenu';

interface NavBarProps {}

const navBarSections = [
    { key: 'projects', section: 'PROJECTS', routePath: '#projects' },
    { key: 'contact-me', section: 'EXPERIENCE', routePath: '#contact-me' },
];

const NavBar: FunctionComponent<NavBarProps> = () => {
    const [hoverMenu, setHoverMenu] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);

    const renderMenuIcon = () => {
        if (hoverMenu) {
            return <HiOutlineMenuAlt1 size={20} />;
        }
        return <RxHamburgerMenu size={20} />;
    };
    return (
        <div className="flex flex-row justify-between h-24 w-full px-10 sticky top-0 z-10">
            <div></div>
            <div className="flex flex-row flex-wrap gap-12 items-center absolute right-10 top-12">
                {navBarSections.map(({ key, section, routePath }) => (
                    <NavBarSection
                        key={key}
                        section={section}
                        routePath={routePath}
                    />
                ))}
                <div className="w-16 flex items-center justify-center">
                    <button
                        className="absolute right-4 h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-700 ease-in-out  hover:h-12 hover:w-12"
                        onClick={() => setOpenMenu(true)}
                        onMouseEnter={() => setHoverMenu(true)}
                        onMouseLeave={() => setHoverMenu(false)}
                    >
                        {renderMenuIcon()}
                    </button>
                </div>
            </div>
            {openMenu ? (
                <NavMenu handleClose={() => setOpenMenu(false)} />
            ) : null}
        </div>
    );
};

export default NavBar;
