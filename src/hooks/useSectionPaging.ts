import { useEffect, useRef } from 'react';

/** Wheel events further apart than this start a new gesture. */
const GESTURE_GAP_MS = 180;
/** Accumulated wheel delta needed before a gesture turns the page. */
const WHEEL_THRESHOLD = 25;
/** Minimum finger travel for a swipe to turn the page. */
const SWIPE_THRESHOLD = 50;
/** Tolerance when deciding whether the page is at its top/bottom edge. */
const EDGE_TOLERANCE = 2;

type Direction = 1 | -1;

interface PagingOptions {
    onNext: () => void;
    onPrev: () => void;
    onFirst: () => void;
    onLast: () => void;
    /** True while a section transition is running; input is ignored. */
    isLocked: () => boolean;
}

const atTop = () => window.scrollY <= EDGE_TOLERANCE;
const atBottom = () =>
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - EDGE_TOLERANCE;

/** Can the page itself still scroll in this direction? */
const pageCanScroll = (dir: Direction) => (dir > 0 ? !atBottom() : !atTop());

/** Is the event inside an element (e.g. a textarea) that can still scroll? */
const innerCanScroll = (target: EventTarget | null, dir: Direction) => {
    let el = target instanceof Element ? target : null;
    while (el && el !== document.body) {
        const { overflowY } = getComputedStyle(el);
        if (
            (overflowY === 'auto' || overflowY === 'scroll') &&
            el.scrollHeight > el.clientHeight
        ) {
            const canScroll =
                dir > 0
                    ? el.scrollTop + el.clientHeight <
                      el.scrollHeight - EDGE_TOLERANCE
                    : el.scrollTop > EDGE_TOLERANCE;
            if (canScroll) return true;
        }
        el = el.parentElement;
    }
    return false;
};

/** A modal (the menu drawer) owns input while it's open. */
const modalOpen = () =>
    document.documentElement.hasAttribute('data-modal-open');

const isEditable = (target: EventTarget | null) =>
    target instanceof HTMLElement &&
    (target.isContentEditable ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

/**
 * Full-page section paging driven by wheel, keyboard and touch.
 *
 * - One gesture turns exactly one page. A trackpad flick (including its
 *   momentum tail) or a continuous wheel spin counts as one gesture, and the
 *   page turns at the start of the gesture rather than after it ends.
 * - Sections taller than the viewport scroll natively first; the page only
 *   turns once you are at the top/bottom edge, and only on a fresh gesture,
 *   so momentum that carries you to the edge never skips past it.
 */
export default function useSectionPaging(options: PagingOptions) {
    const optionsRef = useRef(options);
    useEffect(() => {
        optionsRef.current = options;
    });

    useEffect(() => {
        const gesture = {
            lastEventAt: 0,
            accumulated: 0,
            handled: false,
            scrolledNatively: false,
        };

        const turn = (dir: Direction) => {
            const { onNext, onPrev } = optionsRef.current;
            if (dir > 0) onNext();
            else onPrev();
        };

        const onWheel = (event: WheelEvent) => {
            if (modalOpen()) return;
            // Ignore pinch-zoom and mostly-horizontal swipes.
            if (event.ctrlKey) return;
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
            if (event.deltaY === 0) return;

            const now = event.timeStamp;
            if (now - gesture.lastEventAt > GESTURE_GAP_MS) {
                gesture.accumulated = 0;
                gesture.handled = false;
                gesture.scrolledNatively = false;
            }
            gesture.lastEventAt = now;

            const dir: Direction = event.deltaY > 0 ? 1 : -1;

            // Let tall sections and scrollable elements scroll normally.
            if (
                !gesture.handled &&
                (innerCanScroll(event.target, dir) || pageCanScroll(dir))
            ) {
                gesture.scrolledNatively = true;
                return;
            }

            // From here on we own this gesture: stop the page from scrolling.
            event.preventDefault();

            if (
                gesture.handled ||
                gesture.scrolledNatively ||
                optionsRef.current.isLocked()
            ) {
                return;
            }

            gesture.accumulated += event.deltaY;
            if (Math.abs(gesture.accumulated) < WHEEL_THRESHOLD) return;

            gesture.handled = true;
            turn(dir);
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.defaultPrevented || isEditable(event.target)) return;
            if (modalOpen()) return;
            if (event.altKey || event.ctrlKey || event.metaKey) return;

            const { onFirst, onLast, isLocked } = optionsRef.current;
            let dir: Direction | null = null;

            switch (event.key) {
                case 'ArrowDown':
                case 'PageDown':
                    dir = 1;
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    dir = -1;
                    break;
                case ' ':
                    dir = event.shiftKey ? -1 : 1;
                    break;
                case 'Home':
                    event.preventDefault();
                    if (!isLocked()) onFirst();
                    return;
                case 'End':
                    event.preventDefault();
                    if (!isLocked()) onLast();
                    return;
                default:
                    return;
            }

            // Space on a focused button/link should activate it.
            if (
                event.key === ' ' &&
                event.target instanceof HTMLElement &&
                event.target.closest('button, a')
            ) {
                return;
            }

            if (pageCanScroll(dir)) return; // scroll the tall section first
            event.preventDefault();
            if (!isLocked() && !event.repeat) turn(dir);
        };

        const touch = { x: 0, y: 0, atTop: false, atBottom: false };

        const onTouchStart = (event: TouchEvent) => {
            const point = event.touches[0];
            touch.x = point.clientX;
            touch.y = point.clientY;
            touch.atTop = atTop();
            touch.atBottom = atBottom();
        };

        const onTouchEnd = (event: TouchEvent) => {
            if (modalOpen()) return;
            const point = event.changedTouches[0];
            const dy = touch.y - point.clientY; // > 0: finger moved up
            const dx = touch.x - point.clientX;
            if (Math.abs(dy) < SWIPE_THRESHOLD || Math.abs(dx) > Math.abs(dy)) {
                return;
            }
            if (optionsRef.current.isLocked()) return;

            const dir: Direction = dy > 0 ? 1 : -1;
            if (innerCanScroll(event.target, dir)) return;
            // Only turn if the swipe started at the edge it is pushing past.
            if (dir > 0 ? touch.atBottom : touch.atTop) turn(dir);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);
}
