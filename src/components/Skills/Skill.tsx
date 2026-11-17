import { FunctionComponent } from 'react';
import { tagClasses } from '@/cssClasses';

export interface SkillProps {
    title: string;
    skills: string[];
}

const Skill: FunctionComponent<SkillProps> = ({ title, skills }) => {
    return (
        <ul aria-label={title} className="fade-in flex flex-wrap gap-2">
            {skills.map((skill) => (
                <li key={skill} className={tagClasses}>
                    {skill}
                </li>
            ))}
        </ul>
    );
};

export default Skill;
