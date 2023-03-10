'use client';
import {
    MutableRefObject,
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
    useRef,
} from 'react';

export default function useOnWheel(
    ref: MutableRefObject<HTMLDivElement | null>,
    onWheelUp: () => void,
    onWheelDown: () => void,
) {
    let timeoutId = useRef<string | number | NodeJS.Timeout | undefined>();

    const [scrollable, setScrollable] = useState(false);

    const onWheel = useCallback(
        (event: WheelEvent) => {
            clearTimeout(timeoutId.current);
            if (scrollable && ref?.current && ref?.current?.scrollTop > 0) {
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
        [onWheelDown, onWheelUp, scrollable, ref],
    );

    useLayoutEffect(() => {
        if (!ref.current) return;

        if (ref.current.scrollHeight >= window.innerHeight) {
            setScrollable(true);
        } else {
            if (scrollable) {
                setScrollable(false);
            }
        }
    }, [ref, ref?.current?.scrollHeight, scrollable]);

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, [onWheel, scrollable]);
}
