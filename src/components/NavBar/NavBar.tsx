import { FunctionComponent, useState } from 'react';
import NavBarSection from './NavBarSection';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import NavMenu from './NavMenu';
import { Button } from '../UI';
import { hoverText } from '@/cssClasses';

interface NavBarProps {}

const navBarSections = [
    { key: 'projects', section: 'PROJECTS', routePath: 'projects' },
    // { key: 'contact-me', section: 'EXPERIENCE', routePath: '#contact-me' },
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
        <div
            className={`flex flex-row justify-between h-24 w-full px-10 fixed top-0 ${
                openMenu ? 'z-[10]' : ''
            }`}
        >
            <div></div>
            <div className="flex flex-row flex-wrap gap-0 md:gap-10 items-center absolute right-7 md:right-10 top-12">
                <div className="invisible md:visible">
                    {navBarSections.map(({ key, section, routePath }) => (
                        <NavBarSection
                            key={key}
                            section={section}
                            routePath={routePath}
                        />
                    ))}
                </div>
                <a
                    className={`rounded-md px-4 py-2 border-gray border hover:bg-secondary hover:bg-opacity-30 text-gray border-primary text-primary ${hoverText} text-sm md:text-md`}
                    href="/Resume.pdf"
                    download
                >
                    Resume
                </a>

                <div className="w-16 flex items-center justify-center">
                    <button
                        className="absolute right-0 md:right-4 h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-700 ease-in-out hover:h-12 hover:w-12"
                        onClick={() => setOpenMenu(true)}
                        onMouseEnter={() => setHoverMenu(true)}
                        onMouseLeave={() => setHoverMenu(false)}
                    >
                        {renderMenuIcon()}
                    </button>
                </div>
            </div>
            {openMenu ? (
                <NavMenu
                    handleClose={() => setOpenMenu(false)}
                    openMenu={openMenu}
                />
            ) : null}
        </div>
    );
};

export default NavBar;
