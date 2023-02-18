import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { hoverText, hoverTranslate } from '@/app/cssClasses';
import { IoOpenOutline } from 'react-icons/io5';
import Link from '../UI/Link';
import Image from 'next/image';

interface HighlightedProjectCardProps {
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
    title: string;
    desc: string;
    img?: string;
}

const HighlightedProjectCard: FunctionComponent<
    HighlightedProjectCardProps
> = ({ githubUrl, demoUrl, title, desc, skills, img }) => {
    return (
        <a
            href={githubUrl ?? '#'}
            className="flex flex-row justify-between border border-primary rounded-2xl h-[450px] border-opacity-40 bg-[#1E2025] pt-16 pl-12"
        >
            <div className="flex flex-[32%] flex-col justify-between">
                <div className="text-2xl text-white font-bold"> {title}</div>
                <div>
                    <div className="text-sm text-gray text-opacity-70">
                        {desc}
                    </div>
                    <div className="text-sm text-gray text-opacity-70 mt-5">
                        {desc}
                    </div>
                </div>

                <div className="text-sm mb-12">{githubUrl}</div>
            </div>
            <div className="flex flex-[68%] flex-col pr-10 ml-12">
                <Image
                    src={
                        'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    }
                    width={600}
                    height={270}
                    alt="img"
                    className="rounded-lg"
                    style={{ objectFit: 'cover', maxHeight: 330 }}

                    // fioll
                />
            </div>
        </a>
    );
};

export default HighlightedProjectCard;
