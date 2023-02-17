import { hoverText, hoverTranslate } from '@/app/cssClasses';
import { FunctionComponent } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Link from '../UI/Link';

interface SocialMediaLinksProps {}

const links = [
    { key: 'github', link: 'https://github.com/RUPESH1439', Icon: FiGithub },
    {
        key: 'linkedin',
        link: 'https://www.linkedin.com/in/sthrupesh/',
        Icon: FiLinkedin,
    },
    {
        key: 'instagram',
        link: 'https://www.instagram.com/sthrupesh_/',
        Icon: FiInstagram,
    },
];

const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col my-8 gap-8">
                {links.map(({ key, Icon, link }) => (
                    <div key={key} className={`text-gray ${hoverTranslate}`}>
                        <Link link={link}>
                            <Icon
                                size={18}
                                className={`${'text-gray hover:text-primary'} ${hoverText}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="h-20 w-0 border-[rgba(160,160,255,0.40)] border-[0.5px]"></div>
        </div>
    );
};

export default SocialMediaLinks;
