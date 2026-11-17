import { CSSProperties, FunctionComponent } from 'react';
import { TOPTAL_RESUME_LINK } from '@/constants';
import text from '@/text/en';
import { LinkButton } from '../UI';
import Link from '../UI/Link';

const HeroSection: FunctionComponent = () => {
    const {
        hero: { name, role, summary },
    } = text;

    return (
        <section
            aria-labelledby="hero-title"
            className="@container flex flex-col"
        >
            <h1
                id="hero-title"
                className="hero-name type-display self-start text-ink"
                style={{ '--chars': name.length } as CSSProperties}
            >
                {name}
            </h1>

            <p className="mt-3 type-subtitle text-primary md:mt-4">{role}</p>
            <p className="mt-6 max-w-[48ch] type-lede text-slate/80 md:mt-8">
                {summary} I currently take on freelance work through{' '}
                <Link link={TOPTAL_RESUME_LINK}>Toptal</Link>.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-12">
                <LinkButton href="/#work">See my work</LinkButton>
                <LinkButton href="/#contact" variant="quiet">
                    Get in touch
                </LinkButton>
            </div>
        </section>
    );
};

export default HeroSection;
