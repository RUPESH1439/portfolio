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
        <div className="mx-20 py-36 2xl:py-48 flex flex-grow">
            <div className="h-0 w-0 absolute top-[12%] border-[rgba(160,160,255,0.40)] border-[1px] lg:h-[50%] 2xl:h-[55%] rounded-[100px] border-b-0 rounded-b-none lg:w-[88%] 2xl:w-[92%] left-[80px] ml-[3px]"></div>
            <div className="z-100 h-10 w-[55%] 2xl:w-[65%] absolute top-[10%] left-[18%] 2xl:left-[14%] bg-background rounded-[50%]"></div>
            <Carousel sections={carouseSections} />
            <div className="z-100 h-[57%] 2xl:h-[95%] w-10 absolute top-[40%] right-[60px] bg-background rounded-[50%]"></div>
        </div>
    );
}
