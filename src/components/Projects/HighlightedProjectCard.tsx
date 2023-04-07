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
        <Link link={demoUrl ?? githubUrl ?? '#'}>
            <div className="flex flex-1 flex-col md:flex-row justify-between border border-primary rounded-2xl border-opacity-40 bg-gradient-to-b from-[#1c1a1f] to-[#28263B] px-4 md:pl-12">
                <div className="flex flex-[100%] md:flex-[40%] flex-col py-2 md:py-8">
                    <div>
                        <div className="text-lg md:text-2xl text-white">
                            {title}
                        </div>
                    </div>
                    <div>
                        <div className="text-xs md:text-sm text-gray text-opacity-70 mt-2 md:mt-5 mb-4 ">
                            {desc}
                        </div>

                        <div>
                            <div className="text-md text-white">
                                Responsibilities
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                {responsibilities?.map((responsibility) => (
                                    <div
                                        key={responsibility}
                                        className="flex flex-row items-center gap-1 text-xs md:text-sm text-gray text-opacity-70"
                                    >
                                        <MdOutlineNavigateNext className="text-gray" />
                                        {responsibility}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-3 md:mt-5">
                            <div className="text-md text-white mb-3">
                                Technologies
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills?.map((skill) => {
                                    return (
                                        <div
                                            className="text-xs md:text-sm text-gray text-opacity-60 border border-gray rounded-3xl px-2 md:px-3 py-0.5 md:py-1"
                                            key={skill}
                                        >
                                            {skill}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-row items-center gap-2 mt-4 md:mt-8">
                                {githubUrl ? (
                                    <div className="flex flex-col text-gray hover:text-primary">
                                        <button
                                            title="View Code"
                                            onClick={() => {}}
                                            className="flex flex-row items-center gap-1"
                                        >
                                            <div className="text-sm">
                                                View Code
                                            </div>
                                            <FiGithub />
                                        </button>
                                        <div className="border border-[0.5px] opacity-50 mt-1 "></div>
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
                                            className="flex flex-row items-center gap-1"
                                        >
                                            <div className="text-sm">
                                                View Live
                                            </div>
                                            <FiExternalLink />
                                        </button>
                                        <div className="border border-[0.5px] opacity-50 mt-1 "></div>
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
                <div className="flex flex-[100%] md:flex-[60%] flex-col ml-0 md:ml-12 self-end bg-blend-hue">
                    <Image
                        src={img ?? ''}
                        width={650}
                        height={270}
                        alt="img"
                        className="rounded-lg rounded-l-none "
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
