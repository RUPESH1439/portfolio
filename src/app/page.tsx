'use client';
import { HeroSection } from '@/components/HeroSection';
import { AboutMe } from '@/components/AboutMe';
import { Carousel } from '@/components/Carousel';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';

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
            <div className="h-[50%] w-[20%] border-r-0 rounded-r-none absolute top-[12%] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none left-[80px] "></div>
            <div className="h-[20%] w-[20%] border-l-0 rounded-l-none absolute top-[12%] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none right-16 "></div>
            <Carousel sections={carouseSections} />
            <div className="absolute bottom-0 right-16">
                <SocialMediaLinks />
            </div>
        </div>
    );
}
