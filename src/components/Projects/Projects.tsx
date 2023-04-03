import { FunctionComponent, RefObject } from 'react';
import { SectionTitle } from '../SectionTitle';
import { PrimaryText, SecondaryText } from '../UI';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
    _ref?: RefObject<HTMLDivElement>;
}

const Projects: FunctionComponent<ProjectsProps> = ({ _ref }) => {
    return (
        <div className="flex flex-col flex-1 absolute">
            <SectionTitle title="Projects" />
            <div
                ref={_ref}
                className="flex flex-wrap gap-8 pt-5 overflow-y-auto scrollbar-hide "
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProjectCard
                        key={index}
                        title="Calorie tracker app"
                        desc="Lorem Ipsum has been the industry's standard dummy text ever since ed. It was popularised in the 1960s with the release of"
                        githubUrl="https://github.com/RUPESH1439"
                        demoUrl="https://github.com/RUPESH1439"
                        skills={['NextJs', 'Typescript', 'React']}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
