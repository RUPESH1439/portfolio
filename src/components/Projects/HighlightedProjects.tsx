import { FunctionComponent, KeyboardEvent, useRef, useState } from 'react';
import { SectionTitle } from '../SectionTitle';
import ProjectDetail, { Project } from './ProjectDetail';
import benableImg from '../../../public/benable.jpg';
import fanvoyageImg from '../../../public/fanvoyage.webp';
import hohmImg from '../../../public/hohm.jpg';
import realphaImg from '../../../public/realpha.png';
import scoutxImg from '../../../public/scoutx.webp';
import myHairCountsImg from '../../../public/my-hair-counts.png';
import woollybuggersImg from '../../../public/woollybuggers.png';
import meaAppImg from '../../../public/mea-app.png';
import calorieTrackerImg from '../../../public/CalorieTracker.png';

const projects: Project[] = [
    {
        title: 'Benable',
        platform: 'iOS and Android app',
        role: 'Senior mobile developer',
        desc: 'A React Native app for sharing and monetizing recommendations. People build curated lists of things they love and earn commission through affiliate partnerships.',
        responsibilities: [
            'Led list creation, affiliate linking, content discovery and sharing, and optimized app performance',
            'Shipped critical features and fixes so the app launched on the App Store on schedule',
            'Integrated Meta APIs, driving 300% weekly growth in user activity',
            'Released the Android app on Google Play after fixing the roughly 60% of functionality that wasn’t working',
            'Worked AI-first with Claude Code and Cursor, and built LLM features with the Claude API',
        ],
        demoUrl:
            'https://apps.apple.com/us/app/benable-for-influencers-all/id6495064828',
        img: benableImg,
        aiTools: ['Claude Code', 'Cursor', 'Claude API'],
        skills: [
            'React Native',
            'TypeScript',
            'Expo',
            'React Query',
            'Tamagui',
            'Supabase',
            'Instagram API',
            'Mixpanel',
        ],
    },
    {
        title: 'FanVoyage',
        platform: 'iOS and Android app',
        role: 'React Native full-stack mobile developer',
        desc: 'A React Native app for traveling soccer fans. Supporters follow their team’s away games, check in at stadiums with GPS, see live fan counts, earn badges and compete on leaderboards.',
        responsibilities: [
            'Diagnosed the app store rejections and audited the codebase, finding about 60% of the app out of sync with the live builds',
            'Rebuilt the iOS and Android apps from scratch on a tight deadline, with Claude Code and Cursor as coding agents',
            'Added the missing core features, including background jobs, push notifications and store compliance requirements',
            'Shipped both apps on time through App Store and Play Store review',
        ],
        demoUrl:
            'https://apps.apple.com/us/app/fanvoyage-away-days/id6760428779',
        img: fanvoyageImg,
        aiTools: ['Claude Code', 'Cursor'],
        skills: [
            'React Native',
            'TypeScript',
            'Expo',
            'Node.js',
            'Fastify',
            'Supabase',
            'PostgreSQL',
            'Redis',
            'Firebase Cloud Messaging',
            'Twilio',
        ],
    },
    {
        title: 'Hohm Energy',
        platform: 'Web and mobile apps',
        role: 'Full-stack React and React Native developer',
        desc: 'Hohm Energy helps homeowners and businesses go solar. I worked full-stack across its React and Next.js web app and its React Native mobile app, and led the build of a new version of the mobile app.',
        img: hohmImg,
        wideImage: true,
        responsibilities: [
            'Led a team of four building a new version of the React Native mobile app',
            'Worked with the product owners to scope estimates, timelines and effort',
            'Improved codebase workflows through code reviews and code analysis',
            'Used AI tools and prompt engineering day to day, and worked on OpenAI integrations',
        ],
        aiTools: ['OpenAI', 'Prompt engineering'],
        skills: [
            'React Native',
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Expo',
            'React Query',
            'Zustand',
            'PostgreSQL',
            'DocuSign',
            'Monorepos',
        ],
    },
    {
        title: 'ReAlpha',
        platform: 'Mobile app',
        role: 'Lead front-end engineer',
        desc: 'A digital marketplace with more than 30 employees that simplifies, finances and manages short-term rental investments. The app lets investors browse and manage a wide range of properties.',
        responsibilities: [
            'Designed the front-end architecture',
            'Led a team of five',
            'Worked closely with the client and the CTO',
            'Integrated third-party APIs',
            'Fixed critical issues and streamlined workflows',
        ],
        demoUrl: 'https://www.realpha.com',
        skills: [
            'React',
            'TypeScript',
            'React Native',
            'GraphQL',
            'AWS Amplify',
            'Node.js',
            'Tailwind CSS',
            'APNs',
            'Expo',
            'EAS',
            'WordPress',
        ],
        img: realphaImg,
    },
    {
        title: 'ScoutX',
        platform: 'Mobile app',
        role: 'Lead front-end engineer',
        desc: 'A platform that connects athletes, coaches and scouts during college recruiting, replacing manual paperwork and slow back-and-forth.',
        responsibilities: [
            'Designed the front-end architecture',
            'Led a team of five',
            'Worked closely with the client and the CTO',
            'Integrated third-party APIs',
            'Fixed critical issues and streamlined workflows',
        ],
        demoUrl:
            'https://play.google.com/store/apps/details?id=com.scoutx.scoutx&hl=en&gl=US',
        skills: [
            'React',
            'TypeScript',
            'React Native',
            'GraphQL',
            'AWS Amplify',
            'Node.js',
            'Tailwind CSS',
            'APNs',
            'Expo',
            'EAS',
        ],
        img: scoutxImg,
    },
    {
        title: 'MyHairCounts',
        platform: 'iOS and Android app',
        role: 'Front-end developer',
        desc: 'A React Native app that measures and tracks the percentage of grey hair and the degree of dandruff.',
        responsibilities: [
            'Shipped the v2 features and fixed critical bugs',
            'Refactored the legacy codebase',
            'Released new versions to the App Store and Play Store with Fastlane',
            'Worked closely with the client and the team',
        ],
        demoUrl: 'https://www.myhaircounts.com/',
        skills: [
            'React',
            'TypeScript',
            'React Native',
            'MobX',
            'Styled-components',
            'Fastlane',
            'iOS',
            'Android',
            'Xcode',
            'ClickUp',
        ],
        img: myHairCountsImg,
    },
    {
        title: 'Woolly Buggers',
        platform: 'iOS and Android app',
        role: 'Full-stack developer',
        desc: 'A React Native app with easy-to-read map layers of fishable rivers, over 3,000 lakes, public access points, private land and fishing regulations. Anglers can also save and share their spots.',
        responsibilities: [
            'Designed the front-end and back-end architecture',
            'Worked closely with the client',
            'Built new features and refactored the codebase',
            'Integrated third-party APIs, including Mapbox and Twilio',
            'Fixed critical issues and streamlined workflows',
        ],
        demoUrl: 'https://www.woollybuggermaps.com/',
        skills: [
            'React',
            'TypeScript',
            'React Native',
            'Ruby on Rails',
            'PostgreSQL',
            'AWS',
            'Styled-components',
            'OneSignal',
            'Apple Pay',
            'Google Pay',
            'Mapbox',
        ],
        img: woollybuggersImg,
    },
    {
        title: 'MEA',
        platform: 'Android app',
        role: 'Front-end developer',
        desc: 'A React Native app that gives maintenance workers and the people who hire them one place to track maintenance work, including time and cost.',
        responsibilities: [
            'Upgraded core libraries, including React and React Native',
            'Built new screens',
            'Fixed file upload issues',
            'Fixed critical findings from penetration testing',
        ],
        skills: [
            'React',
            'React Native',
            'TypeScript',
            'Android',
            'Semantic Release',
            'Penetration testing',
            'Git',
            'Jira',
        ],
        img: meaAppImg,
        wideImage: true,
    },
    {
        title: 'Calorie Tracker',
        platform: 'Web app',
        role: 'Full-stack developer',
        desc: 'A React web app for tracking the calories in the food you eat each day, designed to make monitoring your intake quick and easy.',
        githubUrl: 'https://github.com/RUPESH1439/Calorie-Tracker',
        responsibilities: [
            'Assessed the requirements',
            'Designed the database ER model',
            'Designed the front-end and back-end architecture',
            'Built the back-end APIs',
            'Built the front-end components and connected them to the API',
        ],
        skills: [
            'React',
            'TypeScript',
            'Next.js',
            'Material UI',
            'Axios',
            'Ruby on Rails',
            'PostgreSQL',
            'Git',
        ],
        img: calorieTrackerImg,
        wideImage: true,
    },
];

const HighlightedProjects: FunctionComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const selected = projects[selectedIndex];

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
        const back = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
        if (!forward && !back) return;
        event.preventDefault();
        const next =
            (selectedIndex + (forward ? 1 : -1) + projects.length) %
            projects.length;
        setSelectedIndex(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <section
            aria-labelledby="work-title"
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
        >
            <div className="lg:col-span-4 xl:col-span-3">
                <SectionTitle id="work-title" title="Selected work" />
                <p className="mt-4 type-body text-slate/80">
                    Web and mobile apps I’ve built and shipped.
                </p>

                <div
                    role="tablist"
                    aria-label="Projects"
                    aria-orientation="vertical"
                    onKeyDown={onKeyDown}
                    className="scrollbar-hide -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:mt-8 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
                >
                    {projects.map((project, index) => {
                        const isSelected = index === selectedIndex;
                        return (
                            <button
                                key={project.title}
                                ref={(el) => {
                                    tabRefs.current[index] = el;
                                }}
                                type="button"
                                role="tab"
                                id={`project-tab-${index}`}
                                aria-selected={isSelected}
                                aria-controls="project-panel"
                                tabIndex={isSelected ? 0 : -1}
                                onClick={() => setSelectedIndex(index)}
                                className={`group shrink-0 rounded-full border px-4 py-2 text-left transition-colors lg:flex lg:items-stretch lg:gap-4 lg:rounded-none lg:border-0 lg:px-0 lg:py-1.5 ${
                                    isSelected
                                        ? 'border-primary/60 bg-primary/10 lg:bg-transparent'
                                        : 'border-haze/20 hover:border-haze/40'
                                }`}
                            >
                                <span
                                    aria-hidden
                                    className={`hidden w-1 shrink-0 rounded-full transition-colors lg:block ${
                                        isSelected
                                            ? 'bg-primary'
                                            : 'bg-haze/15 group-hover:bg-haze/40'
                                    }`}
                                />
                                <span className="flex flex-col">
                                    <span
                                        className={`type-ui whitespace-nowrap transition-colors ${
                                            isSelected
                                                ? 'text-ink'
                                                : 'text-slate/75 group-hover:text-ink'
                                        }`}
                                    >
                                        {project.title}
                                    </span>
                                    <span className="hidden type-caption text-muted lg:block">
                                        {project.platform}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="lg:col-span-8 xl:col-span-9">
                <ProjectDetail
                    key={selected.title}
                    id="project-panel"
                    labelledBy={`project-tab-${selectedIndex}`}
                    project={selected}
                />
            </div>
        </section>
    );
};

export default HighlightedProjects;
