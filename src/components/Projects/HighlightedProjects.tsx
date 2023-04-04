import { FunctionComponent, RefObject } from 'react';
import { SectionTitle } from '../SectionTitle';
import HighlightedProjectCard, {
    HighlightedProjectCardProps,
} from './HighlightedProjectCard';

interface HighlightedProjectsProps {
    _ref?: RefObject<HTMLDivElement>;
}

const projects: HighlightedProjectCardProps[] = [
    {
        title: 'MEA Mobile App (Toptal)',
        desc: `A React Native based mobile app for android to provide a platform for maintenance worker and work provider to track the maintenance works (time, cost, etc)`,
        responsibilities: [
            'Upgraded the library versions (react, react-native, etc)',
            'Implemented new screens',
            'Fixed file upload issues',
            'Fixed critical penetration testing issues',
        ],
        skills: [
            'React',
            'React Native',
            'Typescript',
            'Android',
            'Semantic Release',
            'Penetration Testing',
            'Git',
            'JIRA',
        ],
        functionalites: [],
        img: '/mea-app.png',
    },
    {
        title: 'Calorie Tracker Web App',
        desc: `A React based web app or tracking the daily calorie intake of food items. The app is designed to help users monitor and manage their calorie intake in an easy and convenient way`,
        githubUrl: 'https://github.com/RUPESH1439/Calorie-Tracker',
        responsibilities: [
            'Assessed the requirements',
            'Created ER models for database',
            'Created front-end and back-end architecture',
            'Created backend APIs required',
            'Created front-end components and integrated them with the backend',
        ],
        skills: [
            'React',
            'Typescript',
            'Next.js',
            'Material UI',
            'Axios',
            'Ruby on Rails',
            'Postgresql',
            'Git',
        ],
        functionalites: [],
        img: '/CalorieTracker.png',
    },
    {
        title: 'MyHairCounts Mobile App',
        desc: 'MyHairCounts App is a React-Native App that measures and tracks the percentage of grey hairs and even your degree of dandruff.',
        responsibilities: [
            'Implemented new v2 features and fixed critical bugs',
            'Refactored old codebase',
            'Released new versions to play store and app store using Fastlane',
            'Collaborated with the client and the team',
        ],
        demoUrl: 'https://www.myhaircounts.com/',
        skills: [
            'React',
            'Typescript',
            'React Native',
            'MobX',
            'Styled-components',
            'Fastlane',
            'iOS',
            'Android',
            'XCode',
            'Clickup',
        ],
        functionalites: [],
        img: '/my-hair-counts.png',
        height: 500,
    },
    {
        title: 'Woollybuggers Mobile App',
        desc: 'Woolly Buggers is a React Native based mobile app that delivers easy-to-use map layers of all fishable rivers, over 3,000 lakes, all public access, private lands, fishing regulations, and access regulations. PLUS, save and share fishing spots.',
        responsibilities: [
            'Created front-end and back-end architecture',
            'Collaborated with the client',
            'Worked on implementing new features and refactoring the codebase',
            'Integrated 3rd party APIs (Mapbox, Twilio)',
            'Fixed critical issues and worked on the optimization of workflows',
        ],
        demoUrl: 'https://www.woollybuggermaps.com/',
        skills: [
            'React',
            'Typescript',
            'React Native',
            'Ruby on Rails',
            'Postgresql',
            'AWS',
            'Styled-components',
            'OneSignal',
            'Apple Pay',
            'Google Pay',
            'Mapbox',
        ],
        functionalites: [],
        img: '/woollybuggers.png',
        height: 550,
    },
    {
        title: 'Mobile App for ScoutX',
        desc: 'ScoutX is an innovative digital platform that revolutionizes the way athletes, coaches, and scouts interact and connect during the college recruiting process. The app aims to eliminate the need for manual paperwork and time-consuming processes, making it more efficient for all parties involved.',
        responsibilities: [
            'Created front-end architecture',
            'Lead a team of 5',
            'Collaborated with the client & CTO of the company closely',
            'Integrated 3rd party APIs',
            'Fixed critical issues and worked on optimization of workflows',
        ],
        demoUrl:
            'https://play.google.com/store/apps/details?id=com.scoutx.scoutx&hl=en&gl=US',
        skills: [
            'React',
            'Typescript',
            'React Native',
            'GraphQL',
            'AWS Amplify',
            'NodeJS',
            'TailwindCSS',
            'APN',
            'Expo',
            'EAS',
        ],
        functionalites: [],
        img: '/scoutx.png',
        height: 550,
    },
    {
        title: 'Mobile App for ReAlpha',
        desc: 'ReAlpha is a digital marketplace with more than 30 employees, and it simplifies, finances, and manages short-term rental investments. This app aims to provide a platform for accessing and managing a broad range of real estate properties and investments.',
        responsibilities: [
            'Created front-end architecture',
            'Lead a team of 5',
            'Collaborated with the client & CTO of the company closely',
            'Integrated 3rd party APIs',
            'Fixed critical issues and worked on optimization of workflows',
        ],
        demoUrl: 'https://www.realpha.com',
        skills: [
            'React',
            'Typescript',
            'React Native',
            'GraphQL',
            'AWS Amplify',
            'NodeJS',
            'TailwindCSS',
            'APN',
            'Expo',
            'EAS',
            'Wordpress',
        ],
        functionalites: [],
        img: '/realpha.png',
        height: 550,
    },
];

const HighlightedProjects: FunctionComponent<HighlightedProjectsProps> = ({
    _ref,
}) => {
    return (
        <div className="flex flex-col flex-1">
            <div className="mt-10">
                <SectionTitle title="Projects" />
            </div>
            <div
                ref={_ref}
                className="flex flex-1 flex-col overflow-y-auto scrollbar-hide mt-5 gap-8"
            >
                {projects.map(
                    (
                        {
                            title,
                            desc,
                            demoUrl,
                            githubUrl,
                            skills,
                            functionalites,
                            responsibilities,
                            img,
                            height,
                        },
                        index,
                    ) => (
                        <div className="" key={title}>
                            <HighlightedProjectCard
                                title={title}
                                img={img}
                                desc={desc}
                                githubUrl={githubUrl}
                                demoUrl={demoUrl}
                                skills={skills}
                                functionalites={functionalites}
                                responsibilities={responsibilities}
                                height={height}
                            />
                        </div>
                    ),
                )}
            </div>
            {/* </div> */}
        </div>
    );
};

export default HighlightedProjects;
