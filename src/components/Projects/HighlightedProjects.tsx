import { FunctionComponent, RefObject } from 'react';
import { SectionTitle } from '../SectionTitle';
import HighlightedProjectCard from './HighlightedProjectCard';

interface HighlightedProjectsProps {
    _ref?: RefObject<HTMLDivElement>;
}

const projects = [
    {
        key: 'calorie-tracker',
        title: 'Calorie Tracker App',
        desc: 'A comprehensive tool for tracking the daily calorie intake of food items by allowing the users to monitor and manage their calorie intake in an easy and convenient way.',
        githubUrl: 'https://github.com/RUPESH1439',
        demoUrl: 'https://www.youtube.com/watch?v=z6Xs9rA3L-4',
        skills: ['NextJs', 'Typescript', 'React'],
        functionalities: [
            'Create/View/Edit/Delete calorie intakes',
            'Create/View/Edit/Delete calorie intakes',
        ],
    },
    {
        key: 'calorie-tracker-2',
        title: 'Calorie Tracker App',
        desc: 'A comprehensive tool for tracking the daily calorie intake of food items by allowing the users to monitor and manage their calorie intake in an easy and convenient way.',
        githubUrl: 'https://github.com/RUPESH1439',
        demoUrl: 'https://www.youtube.com/watch?v=z6Xs9rA3L-4',
        skills: ['NextJs', 'Typescript', 'React'],
        functionalities: [],
    },
    {
        key: 'calorie-tracker-3',
        title: 'Calorie Tracker App',
        desc: 'A comprehensive tool for tracking the daily calorie intake of food items by allowing the users to monitor and manage their calorie intake in an easy and convenient way.',
        githubUrl: 'https://github.com/RUPESH1439',
        demoUrl: 'https://www.youtube.com/watch?v=z6Xs9rA3L-4',
        skills: ['NextJs', 'Typescript', 'React'],
        functionalities: [],
    },
];

const HighlightedProjects: FunctionComponent<HighlightedProjectsProps> = ({
    _ref,
}) => {
    return (
        <div className="flex flex-col flex-1 absolute mr-20 z-[999]">
            <SectionTitle title="Projects" />
            <div
                ref={_ref}
                className="flex flex-1 flex-col overflow-y-auto scrollbar-hide mt-5 gap-8"
            >
                {projects.map(
                    (
                        {
                            key,
                            title,
                            desc,
                            demoUrl,
                            githubUrl,
                            skills,
                            functionalities,
                        },
                        index,
                    ) => (
                        <div className="" key={key}>
                            <HighlightedProjectCard
                                title={title}
                                desc={desc}
                                githubUrl={githubUrl}
                                demoUrl={demoUrl}
                                skills={skills}
                                functionalites={functionalities}
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
