'use client';
import { useEffect } from 'react';

export default function useOnWheel(
    timeoutId: string | number | NodeJS.Timeout | undefined,
    onWheelUp: () => void,
    onWheelDown: () => void,
) {
    const onWheel = (event: WheelEvent) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (event.deltaY < 0) {
                onWheelDown();
            } else if (event.deltaY > 0) {
                onWheelUp();
            }
        }, 35);
    };

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, []);
}
