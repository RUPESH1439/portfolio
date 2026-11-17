import {
    ComponentType,
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useRouter } from 'next/router';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useSectionPaging from '@/hooks/useSectionPaging';

export interface CarouselSection {
    /** Used as the URL hash, e.g. `/#work`. */
    key: string;
    label: string;
    Component: ComponentType;
}

interface CarouselProps {
    sections: CarouselSection[];
}

/** Matches the slide animation in globals.css. */
const TRANSITION_MS = 560;

type Direction = 'next' | 'prev' | 'none';

const Carousel: FunctionComponent<CarouselProps> = ({ sections }) => {
    const router = useRouter();
    const [active, setActive] = useState<{
        index: number;
        direction: Direction;
    }>({ index: 0, direction: 'none' });
    const indexRef = useRef(0);
    const lockedUntilRef = useRef(0);

    const goTo = useCallback(
        (target: number) => {
            const next = Math.max(0, Math.min(sections.length - 1, target));
            const current = indexRef.current;
            if (next === current) return;

            indexRef.current = next;
            lockedUntilRef.current = performance.now() + TRANSITION_MS;
            setActive({
                index: next,
                direction: next > current ? 'next' : 'prev',
            });
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Keep the address shareable without adding history entries.
            const { pathname, search } = window.location;
            const hash = next === 0 ? '' : `#${sections[next].key}`;
            window.history.replaceState(
                window.history.state,
                '',
                `${pathname}${search}${hash}`,
            );
        },
        [sections],
    );

    useSectionPaging({
        onNext: () => goTo(indexRef.current + 1),
        onPrev: () => goTo(indexRef.current - 1),
        onFirst: () => goTo(0),
        onLast: () => goTo(sections.length - 1),
        isLocked: () => performance.now() < lockedUntilRef.current,
    });

    // Follow `/#work`-style links, both on load and from in-page links.
    useEffect(() => {
        const followHash = () => {
            const key = window.location.hash.slice(1);
            const index = sections.findIndex((section) => section.key === key);
            if (index >= 0) goTo(index);
        };
        const frame = requestAnimationFrame(followHash);
        window.addEventListener('hashchange', followHash);
        router.events.on('hashChangeComplete', followHash);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('hashchange', followHash);
            router.events.off('hashChangeComplete', followHash);
        };
    }, [goTo, sections, router.events]);

    const { index, direction } = active;
    const { Component, label } = sections[index];
    const isFirst = index === 0;
    const isLast = index === sections.length - 1;

    return (
        <>
            {/* Desktop: section rail. The active section grows into a bar. */}
            <nav
                aria-label="Sections"
                className="fixed top-1/2 left-6 z-10 hidden -translate-y-1/2 lg:block 2xl:left-12"
            >
                <ol className="flex flex-col">
                    {sections.map((section, i) => {
                        const isActive = i === index;
                        return (
                            <li key={section.key}>
                                <button
                                    type="button"
                                    onClick={() => goTo(i)}
                                    aria-current={isActive ? 'step' : undefined}
                                    className="group flex items-center gap-4 py-2.5 pr-3"
                                >
                                    <span
                                        aria-hidden
                                        className={`w-1 rounded-full transition-all duration-500 ease-out-soft ${
                                            isActive
                                                ? 'h-10 bg-primary'
                                                : 'h-1.5 bg-purple-medium/40 group-hover:h-3 group-hover:bg-purple-medium/70'
                                        }`}
                                    />
                                    <span
                                        className={`type-ui transition-colors ${
                                            isActive
                                                ? 'text-primary'
                                                : 'text-gray/50 group-hover:text-gray'
                                        }`}
                                    >
                                        {section.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ol>
                <p className="mt-6 type-caption text-gray/50 tabular-nums">
                    {index + 1} of {sections.length}
                </p>
            </nav>

            {/* Mobile and tablet: compact section switcher. */}
            <nav
                aria-label="Sections"
                className="fixed inset-x-0 bottom-0 z-20 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
            >
                <div className="mx-auto flex max-w-sm items-center justify-between rounded-full border border-purple-medium/20 bg-surface/90 py-1.5 pr-1.5 pl-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <span className="type-ui text-white">{label}</span>
                        <span className="flex gap-1.5" aria-hidden>
                            {sections.map((section, i) => (
                                <span
                                    key={section.key}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === index
                                            ? 'w-4 bg-primary'
                                            : 'w-1.5 bg-purple-medium/40'
                                    }`}
                                />
                            ))}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <button
                            type="button"
                            aria-label="Previous section"
                            disabled={isFirst}
                            onClick={() => goTo(index - 1)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray transition-colors hover:bg-primary-medium disabled:opacity-30"
                        >
                            <FiChevronUp aria-hidden size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next section"
                            disabled={isLast}
                            onClick={() => goTo(index + 1)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background transition-colors hover:bg-orange-light disabled:bg-primary/30"
                        >
                            <FiChevronDown aria-hidden size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                key={sections[index].key}
                className="slide flex min-h-svh flex-col justify-center px-5 pt-28 pb-32 md:px-12 lg:pr-28 lg:pb-12 lg:pl-48 2xl:pr-36 2xl:pl-60"
                data-direction={direction}
                data-slide={sections[index].key}
            >
                <div className="mx-auto w-full max-w-6xl">
                    <Component />
                </div>
            </div>
        </>
    );
};

export default Carousel;
