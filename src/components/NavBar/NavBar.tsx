import { FunctionComponent, useCallback, useRef, useState } from 'react';
import NextLink from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiDownload } from 'react-icons/fi';
import NavBarSection from './NavBarSection';
import NavMenu from './NavMenu';
import { buttonClasses } from '@/cssClasses';

const navBarSections = [
    { key: 'projects', section: 'Projects', routePath: '/projects' },
];

const NavBar: FunctionComponent = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const closeMenu = useCallback(() => {
        setOpenMenu(false);
        menuButtonRef.current?.focus();
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-30 bg-linear-to-b from-background via-background/85 to-transparent">
            <div className="flex h-20 items-center justify-between px-5 md:px-10 2xl:px-16">
                <NextLink
                    href="/"
                    className="site-wordmark type-wordmark whitespace-nowrap text-ink transition-colors hover:text-primary"
                >
                    Rupesh Shrestha
                </NextLink>

                <nav
                    aria-label="Main"
                    className="flex items-center gap-2 md:gap-6"
                >
                    <div className="hidden md:block">
                        {navBarSections.map(({ key, section, routePath }) => (
                            <NavBarSection
                                key={key}
                                section={section}
                                routePath={routePath}
                            />
                        ))}
                    </div>
                    <a
                        className={buttonClasses('outline')}
                        href="/Resume.pdf"
                        download
                    >
                        <span className="max-[359px]:sr-only">Resume</span>
                        <FiDownload aria-hidden size={16} />
                    </a>
                    <button
                        ref={menuButtonRef}
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={openMenu}
                        aria-controls="site-menu"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-transform duration-300 hover:scale-110"
                        onClick={() => setOpenMenu(true)}
                    >
                        <RxHamburgerMenu aria-hidden size={18} />
                    </button>
                </nav>
            </div>
            <NavMenu open={openMenu} handleClose={closeMenu} />
        </header>
    );
};

export default NavBar;
