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
        <div className="md:mx-20 md:py-36 2xl:py-48 flex flex-grow overflow-y-hidden">
            <div
                className={`z-[5] h-[20%] md:h-[45%] w-[20%] border-r-0 rounded-r-none fixed top-[12%] left-[20px] md:left-[80px] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none`}
            />
            <div className="z-[5] h-[20%] md:h-[45%] w-[20%] border-l-0 rounded-l-none fixed top-[12%] right-[20px] md:right-16 border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none " />

            <div className="absolute md:left-[80px] md:right-16">
                <Carousel sections={carouseSections} />
            </div>
            <div className="fixed bottom-0 right-[20px] md:right-16">
                <SocialMediaLinks />
            </div>
        </div>
    );
}
