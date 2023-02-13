import { FunctionComponent } from 'react';
import { PrimaryText, SecondaryText } from '../UI';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { hoverText, hoverTranslate } from '@/app/cssClasses';
import { IoOpenOutline } from 'react-icons/io5';

interface ProjectCardProps {
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
    title: string;
    desc: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
    githubUrl,
    demoUrl,
    title,
    desc,
    skills,
}) => {
    return (
        <a
            href={githubUrl ?? '#'}
            className={`flex-col px-5 py-5 bg-primary-medium rounded-md w-[350px] xl:w-[352px]  ${hoverTranslate}`}
        >
            <div className="flex flex-row items-center self-center justify-between mb-8">
                <CiFolderOn className="text-orange-dark" size={50} />
                <div className="flex flex-row gap-4 items-center">
                    {githubUrl ? (
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <FiGithub
                                className={`${hoverText} hover:text-orange-dark`}
                                size={20}
                            />
                        </a>
                    ) : null}
                    {demoUrl ? (
                        <a href={demoUrl} target="_blank" rel="noreferrer">
                            <IoOpenOutline
                                className={`${hoverText} hover:text-orange-dark`}
                                size={23}
                            />
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="mb-2">
                <SecondaryText
                    styleClass="opacity-100 font-bold text-lg"
                    text={title}
                />
            </div>
            <div className="flex flex-row mb-5">
                <SecondaryText styleClass="opacity-50" text={desc} />
            </div>
            <div className="flex flex-row gap-4">
                {skills?.map((skill) => (
                    <SecondaryText
                        key={skill}
                        text={skill}
                        styleClass="text-xs tracking-wider"
                    />
                ))}
            </div>
        </a>
    );
};

export default ProjectCard;
