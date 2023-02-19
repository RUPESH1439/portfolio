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
        <div className="flex flex-col flex-1 h-full md:h-[600px] mt-48 md:mt-14">
            <span className="text-primary text-sm md:text-md tracking-wider">
                {greeting}
            </span>
            <span className="text-gray text-2xl md:text-6xl font-bold my-5">
                {name}
            </span>
            <span className="text-gray text-2xl md:text-6xl font-bold opacity-50">
                {title}
            </span>

            <span className="w-1/2 my-12">
                I’m a full stack software engineer specializing in building
                robust and scalable web and mobile applications. And, currently,
                I’m engaged in freelancing primarily via{' '}
                <Link link={TOPTAL_RESUME_LINK}>Toptal</Link>.
            </span>
            <div>
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
