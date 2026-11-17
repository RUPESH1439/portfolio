import { RefObject, useCallback, useEffect, useRef } from 'react';

/**
 * Calls `onWheelUp` / `onWheelDown` (debounced by 200ms) when the user scrolls
 * the mouse wheel, unless the content inside `ref` is tall enough to scroll on
 * its own and the pointer is still within it.
 */
export default function useOnWheel(
    ref: RefObject<HTMLDivElement | null>,
    onWheelUp: () => void,
    onWheelDown: () => void,
) {
    const timeoutId = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );

    const onWheel = useCallback(
        (event: WheelEvent) => {
            clearTimeout(timeoutId.current);

            const element = ref.current;
            const scrollable =
                !!element && element.scrollHeight >= window.innerHeight;

            if (
                scrollable &&
                event.pageY > 600 &&
                event.pageY < element.scrollHeight - 150
            ) {
                return;
            }
            if (
                scrollable &&
                element.scrollHeight > window.innerHeight &&
                window.scrollY > 0 &&
                window.scrollY < window.innerHeight + 20
            ) {
                return;
            }
            timeoutId.current = setTimeout(() => {
                if (event.deltaY < 0) {
                    onWheelDown();
                } else if (event.deltaY > 0) {
                    onWheelUp();
                }
            }, 200);
        },
        [onWheelDown, onWheelUp, ref],
    );

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
            clearTimeout(timeoutId.current);
        };
    }, [onWheel]);
}
