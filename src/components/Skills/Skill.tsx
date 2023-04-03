import React, { FunctionComponent } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
export interface SkillProps {
    title: string;
    skills: string[];
}

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];

const Skill: FunctionComponent<SkillProps> = ({ title, skills }) => {
    const slicedArrays = chunkArray(skills, skills.length > 15 ? 12 : 5);
    return (
        <div className="flex flex-1 flex-row flex-wrap gap-16">
            {slicedArrays.map((slicedArray) => (
                <div className="flex flex-col items-start" key={uuid()}>
                    {slicedArray.map((skill) => (
                        <div
                            className="flex flex-row gap-1 justify-center items-center gap-2"
                            key={skill}
                        >
                            <MdOutlineNavigateNext className="text-gray" />
                            <span className="text-gray text-opacity-70">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Skill;
