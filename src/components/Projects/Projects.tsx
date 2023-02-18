import { FunctionComponent } from 'react';
import { SectionTitle } from '../SectionTitle';
import { PrimaryText, SecondaryText } from '../UI';
import ProjectCard from './ProjectCard';

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle title="Projects" />
            <div className="flex flex-wrap gap-8 mt-5 h-[500px] overflow-y-auto scrollbar-hide">
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
            {/* </div> */}
        </div>
    );
};

export default Projects;
