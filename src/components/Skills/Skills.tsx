import React, { FunctionComponent } from 'react';
import Skill, { SkillProps } from './Skill';

interface Skill {
    title: string;
    values: string[];
}

interface SkillsProps {}

const skillSections: SkillProps[] = [
    {
        title: 'Langugages',
        skills: [
            'TypeScript',
            'HTML5',
            'JavaScript',
            'Python 3',
            'CSS3',
            'Sass',
            'CSS',
            'HTML',
            'Python',
            'SQL',
            'ECMAScript (ES6)',
            'Ruby',
            'GraphQL',
            'Snowflake',
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            'React Native',
            'Tailwind CSS',
            'Redux',
            'MUI (Material UI)',
            'Next.js',
            'Bootstrap',
            'Ruby on Rails (RoR)',
            'Ruby on Rails 5',
            'Jest',
            'NestJS',
        ],
    },
    {
        title: 'Libraries/API',
        skills: [
            'React',
            'MobX',
            'Node.js',
            'React Redux',
            'REST APIs',
            'Chart.js',
            'Ruby on Rails API',
            'AWS Amplify',
            'Redux-Saga',
            'WordPress REST API',
            'Stripe',
            'Stripe API',
            'Google Maps SDK',
            'WordPress API',
            'React Navigation',
            'Google Maps',
            'SQLAlchemy',
        ],
    },
    {
        title: 'Tools',
        skills: [
            'OneSignal',
            'Expo',
            'Postman',
            'WebStorm',
            'Amazon Cognito',
            'Figma',
            'Slack',
            'Fastlane',
            'Apple Push Notifications',
            'Azure Active Directory B2C (ADB2C)',
            'Xcode',
            'AWS CLI',
        ],
    },
    {
        title: 'Storage',
        skills: [
            'Databases',
            'PostgreSQL',
            'MySQL',
            'Database Modeling',
            'Amazon S3 (AWS S3)',
            'MongoDB',
        ],
    },
    {
        title: 'Others',
        skills: [
            'Software Development Lifecycle (SDLC)',
            'Web Programming',
            'Mapbox SDK',
            'CSS5',
            'Axios',
            'APIs',
            'Full-stack',
            'XSS Protection',
            'DOM',
            'API Integration',
            'Design Systems',
            'User Interface (UI)',
            'User Experience (UX)',
            'Front-end',
            'JavaScript Libraries',
            'Algorithms',
            'Scalability',
            'Application State Management',
            'Calendars',
            'UI Components',
            'Web Components',
            'Charts',
            'Front-end Development',
            'UI Testing',
            'Software Engineering',
            'Data Visualization',
            'Mobile Apps',
            'Marketplaces',
            'Full-stack Development',
            'Web Development',
            'Task Automation',
            'Automation Scripting',
            'Payment APIs',
            'Back-end',
            'SaaS',
            'Cloud',
            'Chakra UI',
            'Styled-components',
            'Discord',
            'Amplitude',
            'Leadership',
            'Apple Pay',
            'Google Pay',
        ],
    },
];

const Skills: FunctionComponent<SkillsProps> = () => {
    const [selectedSkillSection, setSelectedSkillSection] =
        React.useState<SkillProps | null>(skillSections[0]);
    return (
        <div className="flex flex-col flex-1">
            <div className="mb-5 flex flex-1 flex-row border-b-0 pl-0">
                {skillSections.map((section, index) => (
                    <button
                        onClick={() => {
                            setSelectedSkillSection(section);
                        }}
                        key={section.title}
                        className={`my-2 ${
                            selectedSkillSection?.title === section.title
                                ? 'border-b border-primary'
                                : 'border-0'
                        } pb-4 pr-5 ${index === 0 ? 'pl-0' : ''} text-md`}
                    >
                        {section.title}
                    </button>
                ))}
            </div>
            <div>
                {selectedSkillSection ? (
                    <Skill
                        title={selectedSkillSection.title}
                        skills={selectedSkillSection.skills}
                    />
                ) : null}
            </div>

            <div className="mb-6"></div>
        </div>
    );
};

export default Skills;
