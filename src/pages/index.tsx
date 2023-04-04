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
];

export default function Home() {
    return (
        <div className="md:mx-20 md:py-36 2xl:py-48 flex flex-grow flex-1 overflow-y-hidden">
            <div
                className={`invisible md:visible z-[2] h-[50%] md:h-[45%] w-[20%] border-r-0 rounded-r-none fixed top-[16%] left-[30px] md:left-[80px] border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none`}
            />
            <div className="invisible md:visible z-[2] h-[50%] md:h-[45%] w-[20%] border-l-0 rounded-l-none fixed top-[16%] right-[30px] md:right-16 border-[rgba(160,160,255,0.40)] border-[1px] rounded-[100px] border-b-0 rounded-b-none " />

            <div className="relative z-[5]">
                <Carousel sections={carouseSections} />
            </div>
            <div className="fixed bottom-0 right-[20px] md:right-16">
                <SocialMediaLinks />
            </div>
        </div>
    );
}
