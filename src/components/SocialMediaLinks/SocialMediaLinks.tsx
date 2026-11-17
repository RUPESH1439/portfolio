import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiToptal } from 'react-icons/si';
import { TOPTAL_RESUME_LINK } from '@/constants';
import Link from '../UI/Link';

interface SocialLink {
    key: string;
    label: string;
    link: string;
    Icon: IconType;
}

export const socialLinks: SocialLink[] = [
    {
        key: 'github',
        label: 'GitHub',
        link: 'https://github.com/RUPESH1439',
        Icon: FiGithub,
    },
    {
        key: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/sthrupesh/',
        Icon: FiLinkedin,
    },
    {
        key: 'toptal',
        label: 'Toptal',
        link: TOPTAL_RESUME_LINK,
        Icon: SiToptal,
    },
];

interface SocialMediaLinksProps {
    /** `rail`: icon column pinned to the page edge. `list`: labelled links. */
    variant?: 'rail' | 'list';
}

const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
    variant = 'rail',
}) => {
    if (variant === 'list') {
        return (
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map(({ key, label, link, Icon }) => (
                    <li key={key}>
                        <Link
                            link={link}
                            styleClass="inline-flex items-center gap-2 type-ui text-gray transition-colors hover:text-primary"
                        >
                            <Icon aria-hidden size={18} />
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <ul className="my-6 flex flex-col gap-6">
                {socialLinks.map(({ key, label, link, Icon }) => (
                    <li key={key}>
                        <Link
                            link={link}
                            ariaLabel={label}
                            styleClass="block p-1 text-gray/70 transition duration-200 hover:-translate-y-0.5 hover:text-primary"
                        >
                            <Icon aria-hidden size={18} />
                        </Link>
                    </li>
                ))}
            </ul>
            <div aria-hidden className="h-24 w-px bg-purple-medium/40" />
        </div>
    );
};

export default SocialMediaLinks;
