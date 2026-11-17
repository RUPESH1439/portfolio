import { FunctionComponent, KeyboardEvent, useRef, useState } from 'react';
import Skill, { SkillProps } from './Skill';

const skillSections: SkillProps[] = [
    {
        title: 'AI',
        skills: [
            'Claude Code',
            'Cursor',
            'Agentic coding',
            'AI-assisted development',
            'Claude API',
            'OpenAI',
            'LLM integration',
            'AI agents',
            'Prompt engineering',
        ],
    },
    {
        title: 'Languages',
        skills: [
            'TypeScript',
            'JavaScript (ES6+)',
            'HTML5',
            'CSS3',
            'Sass',
            'Python',
            'Ruby',
            'SQL',
            'GraphQL',
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            'React Native',
            'Next.js',
            'Ruby on Rails',
            'NestJS',
            'Redux',
            'Tailwind CSS',
            'MUI (Material UI)',
            'Bootstrap',
            'Jest',
        ],
    },
    {
        title: 'Libraries & APIs',
        skills: [
            'React',
            'Node.js',
            'MobX',
            'Redux-Saga',
            'React Navigation',
            'REST APIs',
            'Ruby on Rails API',
            'Stripe API',
            'Google Maps SDK',
            'Mapbox SDK',
            'WordPress REST API',
            'Chart.js',
            'Axios',
            'SQLAlchemy',
        ],
    },
    {
        title: 'Tools',
        skills: [
            'Expo',
            'Fastlane',
            'Xcode',
            'OneSignal',
            'Apple Push Notifications',
            'Azure AD B2C',
            'Postman',
            'Figma',
            'WebStorm',
            'Slack',
        ],
    },
    {
        title: 'Storage',
        skills: [
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'Snowflake',
            'Database modeling',
        ],
    },
    {
        title: 'AWS',
        skills: [
            'AWS Lambda',
            'Amazon API Gateway',
            'Amazon DynamoDB',
            'Amazon S3',
            'Amazon CloudFront',
            'Amazon EC2',
            'Amazon Cognito',
            'AWS Amplify',
            'AWS CLI',
            'Amazon ECS',
            'Amazon RDS',
            'Amazon SQS',
            'Amazon SNS',
            'Amazon SES',
        ],
    },
    {
        title: 'Other',
        skills: [
            'Full-stack development',
            'Mobile apps',
            'Front-end development',
            'Back-end development',
            'API integration',
            'Design systems',
            'UI components',
            'Web components',
            'UI testing',
            'Data visualization',
            'Payment APIs',
            'Apple Pay',
            'Google Pay',
            'Marketplaces',
            'SaaS',
            'Cloud',
            'Scalability',
            'XSS protection',
            'Task automation',
            'Styled-components',
            'Chakra UI',
            'Amplitude',
            'Algorithms',
            'SDLC',
            'Leadership',
        ],
    },
];

const Skills: FunctionComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const selected = skillSections[selectedIndex];

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const step =
            event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        event.preventDefault();
        const next =
            (selectedIndex + step + skillSections.length) %
            skillSections.length;
        setSelectedIndex(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <div className="flex flex-col">
            <div
                role="tablist"
                aria-label="Skill groups"
                onKeyDown={onKeyDown}
                className="flex flex-wrap gap-x-1 gap-y-2 border-b border-haze/15"
            >
                {skillSections.map((section, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <button
                            key={section.title}
                            ref={(el) => {
                                tabRefs.current[index] = el;
                            }}
                            type="button"
                            role="tab"
                            id={`skills-tab-${index}`}
                            aria-selected={isSelected}
                            aria-controls="skills-panel"
                            tabIndex={isSelected ? 0 : -1}
                            onClick={() => setSelectedIndex(index)}
                            className={`-mb-px border-b-2 px-3 pt-1 pb-3 type-ui transition-colors first:pl-0 ${
                                isSelected
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-muted hover:text-ink'
                            }`}
                        >
                            {section.title}
                        </button>
                    );
                })}
            </div>
            <div
                id="skills-panel"
                role="tabpanel"
                aria-labelledby={`skills-tab-${selectedIndex}`}
                className="pt-6"
            >
                <Skill
                    key={selected.title}
                    title={selected.title}
                    skills={selected.skills}
                />
            </div>
        </div>
    );
};

export default Skills;
