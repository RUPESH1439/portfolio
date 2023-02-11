'use client';
import {
    FunctionComponent,
    ReactNode,
    useState,
    useEffect,
    useRef,
} from 'react';
import { animated, useSpring } from '@react-spring/web';

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
            height: '50px',
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

    return (
        <div>
            <div className="absolute bottom-[20%] flex flex-col gap-4">
                {sections.map(({ key }, index) => {
                    return (
                        <animated.button
                            key={key}
                            className={`h-2 w-2 rounded-full ${
                                index === activeSectionIndex
                                    ? 'bg-orange-dark'
                                    : 'bg-gray'
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
            </div>

            <div className="text-gray ">
                <animated.div
                    className="px-20 "
                    style={{
                        overflow: 'hidden',
                        width: '100%',
                        ...style,
                    }}
                >
                    <div ref={ref}>
                        {sections[activeSectionIndex].Component}
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Carousel;
