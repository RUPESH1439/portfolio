import { FunctionComponent } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import Link from '../UI/Link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image, { StaticImageData } from 'next/image';
import { hoverText } from '@/cssClasses';
import { Button } from '../UI';
import { HiArrowLongRight } from 'react-icons/hi2';

export interface HighlightedProjectCardProps {
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
    title: string;
    desc: string;
    img?: string;
    functionalites?: string[];
    responsibilities?: string[];
    height?: number;
}

const HighlightedProjectCard: FunctionComponent<
    HighlightedProjectCardProps
> = ({
    githubUrl,
    demoUrl,
    title,
    desc,
    skills,
    img,
    functionalites,
    responsibilities,
    height,
}) => {
    return (
        <Link link={githubUrl ?? '#'}>
            <div className="flex flex-1 flex-row justify-between border border-primary rounded-2xl border-opacity-40 bg-gradient-to-b from-[#1c1a1f] to-[#1a171f] pl-12">
                <div className="flex flex-[40%] flex-col py-8">
                    <div>
                        <div className="text-2xl text-white">{title}</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray text-opacity-70 mt-5 mb-4 ">
                            {desc}
                        </div>

                        <div>
                            <span className="text-md text-white">
                                Responsibilities
                            </span>
                            <div className="flex flex-col gap-2 mt-2">
                                {responsibilities?.map((responsibility) => (
                                    <span
                                        key={responsibility}
                                        className="flex flex-row items-center gap-3 text-sm text-gray text-opacity-70"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-gray"></div>{' '}
                                        {responsibility}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-5">
                            <span className="text-md text-white mb-3">
                                Technologies
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills?.map((skill) => {
                                    return (
                                        <div
                                            className="text-sm text-gray text-opacity-70 border border-gray rounded-3xl px-3 py-1"
                                            key={skill}
                                        >
                                            {skill}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-row items-center gap-2 mt-8">
                                {githubUrl ? (
                                    <div className="flex flex-col text-gray hover:text-primary">
                                        <button
                                            title="View Code"
                                            onClick={() => {}}
                                            className="flex flex-row items-center gap-2 "
                                        >
                                            <span className="text-sm">
                                                View code
                                            </span>
                                            <FiGithub />
                                        </button>
                                        <span className="border border-[0.5px] opacity-50 mt-1 "></span>
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        ></a>
                                    </div>
                                ) : null}
                                {demoUrl ? (
                                    <div className="flex flex-col text-gray hover:text-primary">
                                        <button
                                            title="View Code"
                                            onClick={() => {}}
                                            className="flex flex-row items-center gap-2 "
                                        >
                                            <span className="text-sm">
                                                View live
                                            </span>
                                            <FiExternalLink />
                                        </button>
                                        <span className="border border-[0.5px] opacity-50 mt-1 "></span>
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        ></a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-[60%] flex-col ml-12 justify-end">
                    <Image
                        src={img ?? ''}
                        width={650}
                        height={270}
                        alt="img"
                        className="rounded-lg rounded-l-none"
                        // style={{
                        //     width: '100%',
                        //     objectFit: height ? 'contain' : 'fill',
                        //     height: height ?? '100%',
                        // }}

                        style={{
                            objectFit: 'contain',
                            height: height ?? '100%',
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};

export default HighlightedProjectCard;
