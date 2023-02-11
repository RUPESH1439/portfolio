'use client';
import { FunctionComponent } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BackDrop } from '../UI';
import NavMenuSection from './NavMenuSection';

interface NavMenuProps {
    handleClose: () => void;
}

const sections = [
    { key: 'about', section: 'About', routePath: 'about' },
    { key: 'experience', section: 'Experience', routePath: 'experience' },
    { key: 'work', section: 'Work', routePath: 'work' },
    { key: 'contact', section: 'Contact', routePath: 'contact' },
];

const NavMenu: FunctionComponent<NavMenuProps> = ({ handleClose }) => {
    return (
        <>
            <BackDrop />
            <div className="px-20 pt-24 absolute right-0 w-[60%] md:w-[38%] h-screen bg-purple-light z-50 rounded-l-3xl">
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
            </div>
        </>
    );
};

export default NavMenu;
