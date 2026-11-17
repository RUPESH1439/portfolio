import {
    FunctionComponent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useRouter } from 'next/router';
import { RxCross1 } from 'react-icons/rx';
import { BackDrop } from '../UI';
import NavMenuSection, { MENU_ITEM_HEIGHT } from './NavMenuSection';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

interface NavMenuProps {
    open: boolean;
    handleClose: () => void;
}

const sections = [
    { key: 'home', section: 'Home', routePath: '/' },
    { key: 'about', section: 'About', routePath: '/about' },
    { key: 'projects', section: 'Projects', routePath: '/projects' },
    { key: 'contactMe', section: 'Contact', routePath: '/contactMe' },
];

const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Site menu drawer. It stays mounted so it can animate both in and out; while
 * closed it is `inert` (unfocusable and hidden from assistive tech).
 *
 * One indicator slides to whichever link is hovered or focused and settles
 * back on the current page, so the links themselves never move.
 */
const NavMenu: FunctionComponent<NavMenuProps> = ({ open, handleClose }) => {
    const { pathname } = useRouter();
    const panelRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const activeIndex = sections.findIndex(
        ({ routePath }) => routePath === pathname,
    );
    const indicatorIndex = hoveredIndex ?? activeIndex;
    const showIndicator = indicatorIndex >= 0;

    // Escape closes; the page behind can't scroll or page while open.
    useEffect(() => {
        if (!open) return;
        const root = document.documentElement;
        root.setAttribute('data-modal-open', '');
        closeRef.current?.focus();
        const onKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            root.removeAttribute('data-modal-open');
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, handleClose]);

    // Keep Tab inside the drawer.
    const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Tab' || !panelRef.current) return;
        const focusable = [
            ...panelRef.current.querySelectorAll<HTMLElement>(
                focusableSelector,
            ),
        ];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    };

    return (
        <>
            <BackDrop open={open} onClick={handleClose} />
            <div
                ref={panelRef}
                id="site-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                inert={!open}
                onKeyDown={trapFocus}
                className={`fixed top-0 right-0 z-50 flex h-svh w-full flex-col border-l border-haze/15 bg-surface px-5 pt-24 pb-10 transition-[transform,visibility] duration-500 ease-out-soft md:w-[400px] md:px-8 ${
                    open
                        ? 'visible translate-x-0'
                        : 'invisible translate-x-full'
                }`}
            >
                <button
                    ref={closeRef}
                    type="button"
                    aria-label="Close menu"
                    className="absolute top-[18px] right-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-background transition-transform duration-300 hover:scale-110 md:right-10 2xl:right-16"
                    onClick={handleClose}
                >
                    <RxCross1 aria-hidden size={16} />
                </button>

                <nav aria-label="Pages">
                    <ul
                        className="relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <li
                            aria-hidden
                            className={`pointer-events-none absolute inset-x-0 top-0 rounded-xl bg-tint transition-[transform,opacity] duration-300 ease-out-soft ${
                                showIndicator ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                height: MENU_ITEM_HEIGHT,
                                transform: `translateY(${Math.max(indicatorIndex, 0) * MENU_ITEM_HEIGHT}px)`,
                            }}
                        >
                            <span className="absolute top-1/2 left-0 h-6 w-[3px] -translate-y-1/2 rounded-full bg-primary" />
                        </li>
                        {sections.map(({ key, section, routePath }, index) => (
                            <NavMenuSection
                                key={key}
                                section={section}
                                link={routePath}
                                isActive={index === activeIndex}
                                isHighlighted={index === indicatorIndex}
                                onHighlight={() => setHoveredIndex(index)}
                                onBlur={() => setHoveredIndex(null)}
                                handleClose={handleClose}
                            />
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto border-t border-haze/15 px-4 pt-8">
                    <SocialMediaLinks variant="list" />
                </div>
            </div>
        </>
    );
};

export default NavMenu;
