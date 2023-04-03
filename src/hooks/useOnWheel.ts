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

            if (
                scrollable &&
                ref?.current &&
                ref?.current?.scrollHeight > window.innerHeight &&
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
                // window.scrollTo({ top: 0 });
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
