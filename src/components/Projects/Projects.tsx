import { FunctionComponent, RefObject } from 'react';
import { SectionTitle } from '../SectionTitle';
import { PrimaryText, SecondaryText } from '../UI';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface ProjectsProps {
    _ref?: RefObject<HTMLDivElement>;
}

const projects: ProjectCardProps[] = [
    {
        title: 'MEA Mobile App',
        desc: `A React Native based mobile app for android to provide a platform for maintenance worker and work provider to track the maintenance works (time, cost, etc).

        I was the front-end developer and collaborated actively with the product manager to develop new version features and fix/refactor old codebase issues.
        
        Some of the features had been:
        1. Upgrading the library versions (react, react-native, etc)
        2. Implementing new screens
        3. Fixing file upload issues
        4. Fixing critical penetration testing issues`,
        githubUrl: '',
        demoUrl: '',
        skills: [],
    },
];

const Projects: FunctionComponent<ProjectsProps> = ({ _ref }) => {
    return (
        <div className="flex flex-col flex-1 absolute">
            <SectionTitle title="Projects" />
            <div
                ref={_ref}
                className="flex flex-wrap gap-8 pt-5 overflow-y-auto scrollbar-hide "
            >
                {projects.map(({ title, desc, githubUrl, demoUrl, skills }) => (
                    <ProjectCard
                        key={title}
                        title={title}
                        desc={desc}
                        githubUrl={githubUrl}
                        demoUrl={demoUrl}
                        skills={skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
