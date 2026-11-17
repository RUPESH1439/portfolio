import Link from 'next/link';
import { FunctionComponent } from 'react';

/** Every menu row has the same height, so the indicator can slide by index. */
export const MENU_ITEM_HEIGHT = 60;

interface NavMenuSectionProps {
    section: string;
    link: string;
    isActive: boolean;
    isHighlighted: boolean;
    onHighlight: () => void;
    onBlur: () => void;
    handleClose: () => void;
}

const NavMenuSection: FunctionComponent<NavMenuSectionProps> = ({
    section,
    link,
    isActive,
    isHighlighted,
    onHighlight,
    onBlur,
    handleClose,
}) => {
    const color = isActive
        ? 'text-primary'
        : isHighlighted
          ? 'text-white'
          : 'text-gray/65';

    return (
        <li style={{ height: MENU_ITEM_HEIGHT }}>
            <Link
                href={link}
                onClick={handleClose}
                onMouseEnter={onHighlight}
                onFocus={onHighlight}
                onBlur={onBlur}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex h-full items-center rounded-xl px-5 type-menu transition-colors duration-200 focus-visible:outline-offset-0 ${color}`}
            >
                {section}
            </Link>
        </li>
    );
};

export default NavMenuSection;
