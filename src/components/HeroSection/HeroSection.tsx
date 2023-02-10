import text from '@/text/en';
import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    const {
        hero: { greeting, name, title, description },
    } = text;
    return (
        <div className="flex flex-col">
            <span className="text-orange-dark text-md tracking-wider">
                {greeting}
            </span>
            <span className="text-gray text-6xl font-bold mt-5">{name}</span>
            <span className="text-gray text-6xl font-bold mt-5 opacity-50">
                {title}
            </span>
            <SecondaryText text={description} />
        </div>
    );
};

export default HeroSection;
