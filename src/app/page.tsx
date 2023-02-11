'use client';
import { HeroSection } from '@/components/HeroSection';
import { AboutMe } from '@/components/AboutMe';
import { Carousel } from '@/components/Carousel';

const carouseSections = [
    {
        key: 'hero',
        Component: <HeroSection />,
    },
    {
        key: 'about',
        Component: <AboutMe />,
    },
    {
        key: 'experience',
        Component: <HeroSection />,
    },
];
export default function Home() {
    return (
        <div className="mx-20 py-10 border-[rgba(160,160,255,0.40)] border-[1px] h-[80%] px-5 rounded-[100px] border-b-0 rounded-b-none">
            <div className="z-100 h-10 w-[57%] absolute top-[75px] left-[15%]  bg-background rounded-[50%]"></div>
            <Carousel sections={carouseSections} />
            <div className="z-100 h-10 w-[57%] absolute top-[75px] left-[15%]  bg-background rounded-[50%]"></div>
        </div>
    );
}
