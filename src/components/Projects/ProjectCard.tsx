import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { hoverText, hoverTranslate } from '@/cssClasses';
import { IoOpenOutline } from 'react-icons/io5';
import Link from '../UI/Link';

export interface ProjectCardProps {
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
            className={`flex-col px-5 py-5 bg-primary-medium rounded-md w-full lg:w-[330px] xl:w-[356px] 2xl:w-[380px] ${hoverTranslate}`}
        >
            <div className="flex flex-row items-center self-center justify-between mb-8">
                <CiFolderOn className="text-primary" size={50} />
                <div className="flex flex-row gap-4 items-center">
                    {githubUrl ? (
                        <Link link={githubUrl}>
                            <FiGithub
                                className={`${hoverText} hover:text-primary`}
                                size={20}
                            />
                        </Link>
                    ) : null}
                    {demoUrl ? (
                        <Link link={demoUrl}>
                            <IoOpenOutline
                                className={`${hoverText} hover:text-primary`}
                                size={23}
                            />
                        </Link>
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
