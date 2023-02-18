import { FunctionComponent, RefObject } from 'react';
import { SectionTitle } from '../SectionTitle';
import HighlightedProjectCard from './HighlightedProjectCard';

interface HighlightedProjectsProps {
    _ref?: RefObject<HTMLDivElement>;
}

const HighlightedProjects: FunctionComponent<HighlightedProjectsProps> = ({
    _ref,
}) => {
    return (
        <div className="flex flex-col">
            <SectionTitle title="Projects" />
            <div
                ref={_ref}
                className="flex flex-col overflow-y-auto scrollbar-hide mt-5 gap-8"
            >
                {Array.from({ length: 2 }).map((_, index) => (
                    <HighlightedProjectCard
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

export default HighlightedProjects;
