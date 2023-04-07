import { TOPTAL_RESUME_LINK } from '@/constants';
import text from '@/text/en';
import { FunctionComponent } from 'react';
import { Button } from '../UI';
import Link from '../UI/Link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    const {
        hero: { greeting, name, title },
    } = text;
    const router = useRouter();
    return (
        <div className="flex flex-col flex-1">
            <div className="text-primary text-sm md:text-md tracking-wider">
                {greeting}
            </div>
            <div className="text-gray text-xl md:text-6xl font-bold my-4 md:my-5">
                {name}
            </div>
            <div className="text-gray text-xl md:text-6xl font-bold opacity-[70%]">
                {title}
            </div>

            <div className="w-full md:w-1/2 my-4 md:my-12 text-gray text-opacity-[68%]">
                I’m a full stack software engineer specializing in building
                robust and scalable web and mobile applications. And, currently,
                I’m engaged in freelancing primarily via{' '}
                <Link link={TOPTAL_RESUME_LINK}>Toptal</Link>.
            </div>
            <div className="mt-8">
                <Button
                    title="Learn more"
                    variant="none"
                    onClick={() => {
                        router.push('/about');
                    }}
                >
                    <HiArrowLongRight />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
