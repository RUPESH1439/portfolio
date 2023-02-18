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
            const position = window.pageYOffset;
            if (scrollable && position < 0) {
                return;
            }
            timeoutId.current = setTimeout(() => {
                // if (event.deltaY < 0) {
                //     onWheelDown();
                // } else if (event.deltaY > 0) {
                //     onWheelUp();
                // }
            }, 200);
        },
        [onWheelDown, onWheelUp, scrollable],
    );

    useLayoutEffect(() => {
        if (!ref.current) return;

        console.log('hey', ref.current.clientHeight, window.innerHeight);
        if (ref.current.clientHeight >= window.innerHeight) {
            setScrollable(true);
        } else {
            if (scrollable) {
                setScrollable(false);
            }
        }
    }, [ref, ref?.current?.clientHeight, scrollable]);

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, [onWheel]);
}
