import { TOPTAL_RESUME_LINK } from '@/constants';
import text from '@/text/en';
import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';
import Link from '../UI/Link';

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    const {
        hero: { greeting, name, title },
    } = text;
    return (
        <div className="flex flex-1 flex-col">
            <span className="text-primary text-md tracking-wider">
                {greeting}
            </span>
            <span className="text-gray text-6xl font-bold my-5">{name}</span>
            <span className="text-gray text-6xl font-bold opacity-50">
                {title}
            </span>
            <span className="mt-12 w-1/2 ">
                I’m a full stack software engineer specializing in building
                robust and scalable web and mobile applicatiosn. And, currently,
                I’m engaged in freelancing via{' '}
                <Link link={TOPTAL_RESUME_LINK}>Toptal </Link>
                to develop amazing products.
            </span>
        </div>
    );
};

export default HeroSection;
