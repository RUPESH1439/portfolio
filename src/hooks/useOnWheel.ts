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

    const handleScroll = useCallback(() => {
        const position = window.pageYOffset;
        if (position >= window.innerHeight + 5) {
            setScrollable(false);
        }
    }, [ref, ref?.current?.clientHeight]);

    const onWheel = useCallback(
        (event: WheelEvent) => {
            clearTimeout(timeoutId.current);
            console.log('scrolla', scrollable);
            if (scrollable) {
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
        [onWheelDown, onWheelUp, scrollable],
    );

    useLayoutEffect(() => {
        if (!ref.current) return;

        const position = window.pageYOffset;
        window.scrollTo({ top: 2000, behavior: 'smooth' });

        if (position >= window.innerHeight + 5) {
            setScrollable(false);
            return;
        }

        if (ref.current.clientHeight * 1.5 >= window.innerHeight) {
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return {
        reset: () => {
            setScrollable(true);
        },
    };
}
