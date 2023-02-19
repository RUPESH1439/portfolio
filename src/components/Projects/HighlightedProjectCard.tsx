import { FunctionComponent } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import Link from '../UI/Link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { hoverText } from '@/app/cssClasses';

interface HighlightedProjectCardProps {
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
    title: string;
    desc: string;
    img?: string;
    functionalites?: string[];
}

const HighlightedProjectCard: FunctionComponent<
    HighlightedProjectCardProps
> = ({ githubUrl, demoUrl, title, desc, skills, img, functionalites }) => {
    return (
        <Link link={githubUrl ?? '#'}>
            <div className="flex flex-1 flex-row justify-between border border-primary rounded-2xl h-[450px] border-opacity-40 bg-gradient-to-b from-[#1c1a1f] to-[#1a171f] pl-12">
                <div className="flex justify-between flex-[32%] flex-col py-16">
                    <div>
                        <div className="text-2xl text-white font-bold">
                            {title}
                        </div>
                        <div className="flex flex-row items-center gap-4 mt-4">
                            {githubUrl ? (
                                <a href={githubUrl}>
                                    <FiGithub className={`${'text-primary'}`} />
                                </a>
                            ) : null}
                            {demoUrl ? (
                                <a href={demoUrl}>
                                    <FiExternalLink
                                        size={16}
                                        className={`${'text-primary'}`}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray text-opacity-70 mb-10">
                            {desc}
                        </div>
                        <div>
                            <span className="text-sm text-white mb-3">
                                Technologies used:
                            </span>
                            {skills?.map((skill, index) => {
                                return (
                                    <div
                                        key={skill}
                                        className="flex flex-row items-center justify-start"
                                    >
                                        <MdOutlineNavigateNext className="text-primary" />
                                        <div className="text-sm text-gray text-opacity-70">
                                            {skill}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-[68%] flex-col ml-12">
                    <Image
                        src={
                            'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                        }
                        width={650}
                        height={270}
                        alt="img"
                        className="rounded-lg rounded-l-none"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};

export default HighlightedProjectCard;
