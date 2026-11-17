import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { aiTagClasses, tagClasses } from '@/cssClasses';
import Link from '../UI/Link';

export interface Project {
    title: string;
    /** What kind of product it is, in plain words, e.g. "iOS and Android app". */
    platform: string;
    /** My role on the project, as on the Toptal resume. */
    role: string;
    desc: string;
    /**
     * Screenshot, imported statically from /public so Next.js knows its size
     * (the picture is sized to fit and gets rounded corners). Without one, a
     * typographic cover is shown.
     */
    img?: StaticImageData;
    /** Set for landscape (web or tablet) screenshots so they get a wide frame. */
    wideImage?: boolean;
    githubUrl?: string;
    demoUrl?: string;
    responsibilities: string[];
    /** AI tools and agents used on the project; shown first, highlighted. */
    aiTools?: string[];
    skills: string[];
}

interface ProjectDetailProps {
    project: Project;
    id?: string;
    labelledBy?: string;
}

const actionLinkClasses =
    'inline-flex items-center gap-2 type-label text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary';

/** Name the destination, so the link says what happens. */
const demoLabel = (url: string) => {
    if (url.includes('apps.apple.com')) return 'View on the App Store';
    if (url.includes('play.google.com')) return 'View on Google Play';
    return 'Visit the live site';
};

const ProjectDetail: FunctionComponent<ProjectDetailProps> = ({
    project,
    id,
    labelledBy,
}) => {
    const {
        title,
        platform,
        role,
        desc,
        img,
        wideImage,
        githubUrl,
        demoUrl,
        responsibilities,
        aiTools,
        skills,
    } = project;

    const builtWith = (
        <>
            <h4 className="mt-5 type-label text-white">Built with</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
                {aiTools?.map((tool) => (
                    <li key={tool} className={aiTagClasses}>
                        {tool}
                    </li>
                ))}
                {skills.map((skill) => (
                    <li key={skill} className={tagClasses}>
                        {skill}
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <article
            id={id}
            role="tabpanel"
            aria-labelledby={labelledBy}
            className={`fade-in grid grid-cols-1 gap-8 ${
                wideImage ? '' : 'md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]'
            }`}
        >
            <div
                className={`relative overflow-hidden rounded-2xl border border-purple-medium/15 bg-surface ${
                    wideImage
                        ? 'h-56 md:h-[min(32svh,290px)]'
                        : 'h-72 md:h-[min(62svh,540px)]'
                }`}
            >
                <div
                    aria-hidden
                    className="absolute inset-x-8 bottom-0 h-1/2 rounded-full bg-indigo/40 blur-3xl"
                />
                {img ? (
                    <div className="relative flex h-full items-center justify-center p-5 md:p-7">
                        <Image
                            src={img}
                            alt={`Screenshot of ${title}`}
                            placeholder="blur"
                            sizes={
                                wideImage
                                    ? '(min-width: 768px) 70vw, 90vw'
                                    : '(min-width: 768px) 40vw, 90vw'
                            }
                            className="h-auto max-h-full w-auto max-w-full rounded-xl object-contain ring-1 ring-purple-medium/15"
                        />
                    </div>
                ) : (
                    <div
                        aria-hidden
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8 text-center"
                    >
                        <span className="type-title text-white/90">
                            {title}
                        </span>
                        <span className="type-small text-gray/60">
                            {platform}
                        </span>
                    </div>
                )}
            </div>

            <div
                className={
                    wideImage
                        ? 'grid grid-cols-1 gap-x-10 md:grid-cols-2'
                        : 'flex flex-col'
                }
            >
                <div>
                    <p className="type-label text-primary">{platform}</p>
                    <h3 className="mt-1 type-heading text-white">{title}</h3>
                    <p className="mt-1 type-small text-gray/60">{role}</p>
                    <p className="mt-4 max-w-[62ch] type-body text-gray/75">
                        {desc}
                    </p>
                    {/* Wide layouts have room under the description. */}
                    {wideImage ? builtWith : null}
                </div>

                <div className={wideImage ? 'md:-mt-6' : ''}>
                    <h4 className="mt-5 type-label text-white">What I did</h4>
                    <ul className="mt-2 flex flex-col gap-1 type-small text-gray/75">
                        {responsibilities.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span
                                    aria-hidden
                                    className="mt-2 h-1 w-3 shrink-0 rounded-full bg-primary/60"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {wideImage ? null : builtWith}

                    {demoUrl || githubUrl ? (
                        <div className="mt-7 flex flex-wrap gap-6">
                            {demoUrl ? (
                                <Link
                                    link={demoUrl}
                                    styleClass={actionLinkClasses}
                                >
                                    {demoLabel(demoUrl)}
                                    <FiExternalLink aria-hidden />
                                </Link>
                            ) : null}
                            {githubUrl ? (
                                <Link
                                    link={githubUrl}
                                    styleClass={actionLinkClasses}
                                >
                                    View code
                                    <FiGithub aria-hidden />
                                </Link>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </article>
    );
};

export default ProjectDetail;
