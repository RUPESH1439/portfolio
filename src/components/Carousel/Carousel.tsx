'use client';
import {
    FunctionComponent,
    ReactNode,
    useState,
    useEffect,
    useRef,
    useCallback,
    useLayoutEffect,
} from 'react';
import { animated, useSpring } from '@react-spring/web';
import useOnWheel from '@/hooks/useOnWheel';

interface CarouselProps {
    sections: { key: string; Component: ReactNode }[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ sections }) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [style, animate] = useSpring(() => ({ height: '0px' }), []);

    const [styleDot, animateDot] = useSpring(
        () => ({ height: '6', width: '6' }),
        [],
    );

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animate({
            height: ref?.current?.offsetHeight + 'px',
            from: {
                height: '0px',
            },
            config: {
                duration: 500,
                mass: 5,
                friction: 120,
                tension: 120,
            },
        });
        animateDot({
            height: '60px',
            from: {
                height: '6px',
                width: '6px',
            },
            config: {
                duration: 500,
                mass: 5,
                friction: 120,
                tension: 120,
            },
        });
    }, [animate, ref, activeSectionIndex, animateDot]);

    const onWheelUp = useCallback(() => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth',
        });
        setActiveSectionIndex((prev) => {
            return prev < sections.length - 1 ? prev + 1 : prev;
        });
    }, [sections.length]);

    const onWheelDown = useCallback(() => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth',
        });
        setActiveSectionIndex((prev) => {
            return prev > 0 ? prev - 1 : prev;
        });
    }, []);

    useOnWheel(ref, onWheelUp, onWheelDown);

    return (
        <div>
            <div className="fixed bottom-[8%] flex flex-col gap-7 left-[77px]">
                {sections.map(({ key }, index) => {
                    return (
                        <animated.button
                            key={key}
                            className={`h-2 w-2 rounded-full ${
                                index === activeSectionIndex
                                    ? 'bg-primary'
                                    : 'border border-[rgb(160,160,255,0.4)]'
                            }`}
                            style={
                                index === activeSectionIndex
                                    ? {
                                          ...styleDot,
                                      }
                                    : {}
                            }
                            onClick={() => setActiveSectionIndex(index)}
                        />
                    );
                })}
                <span className="text-primary text-xs font-light mt-10 tracking-widest">
                    0{activeSectionIndex + 1}
                </span>
            </div>

            <div className="text-gray px-20">
                <animated.div
                    className=""
                    style={{
                        overflow: 'hidden',
                        width: '100%',
                        ...style,
                    }}
                >
                    <div ref={ref}>
                        {sections[activeSectionIndex]?.Component}
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Carousel;
