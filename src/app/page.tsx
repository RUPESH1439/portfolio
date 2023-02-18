'use client';

import {
    HeroSection,
    AboutMe,
    Projects,
    Carousel,
    HighlightedProjects,
    SocialMediaLinks,
} from '@/components';

const carouseSections = [
    {
        key: 'hero',
        Component: HeroSection,
    },
    {
        key: 'about',
        Component: AboutMe,
    },
    {
        key: 'highlightedProjects',
        Component: HighlightedProjects,
        forwardRef: true,
    },
    {
        key: 'projects',
        Component: Projects,
        forwardRef: true,
    },
];

export default function Home() {
    return (
        <div className="mx-20 py-36 2xl:py-48 flex flex-grow overflow-y-hidden">
            <div
                className={`z-[5] h-[45%] w-[20%] border-r-0 rounded-r-none fixed top-[12%] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none left-[80px]`}
            />
            <div className="z-[5] h-[45%] w-[20%] border-l-0 rounded-l-none fixed top-[12%] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none right-16" />
            <div className="h-[200px] w-[700px] blur-[400px] bg-blue-gradient rounded-full absolute -top-[10px] left-[25vw] border border-white" />

            <div className="absolute left-[80px] right-16">
                <Carousel sections={carouseSections} />
            </div>
            <div className="fixed bottom-0 right-16">
                <SocialMediaLinks />
            </div>
        </div>
    );
}
