import { FunctionComponent } from 'react';
import NavBarSection from './NavBarSection';

interface NavBarProps {}

const navBarSections = [
    { key: 'about', section: 'About', routePath: '#about' },
    { key: 'experience', section: 'Experience', routePath: '#experience' },
    { key: 'work', section: 'Work', routePath: '#work' },
    { key: 'contact', section: 'Contact', routePath: '#contact' },
];

const NavBar: FunctionComponent<NavBarProps> = () => {
    return (
        <div className="flex flex-row justify-between h-20 w-full px-10 py-5 sticky top-0">
            <div></div>
            <div className="flex flex-row flex-wrap gap-6">
                {navBarSections.map(({ key, section, routePath }, index) => (
                    <NavBarSection
                        key={key}
                        section={section}
                        index={index + 1}
                        routePath={routePath}
                    />
                ))}
            </div>
        </div>
    );
};

export default NavBar;
