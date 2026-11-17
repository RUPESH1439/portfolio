import { FunctionComponent } from 'react';
import { SectionTitle } from '../SectionTitle';
import { Skills } from '../Skills';
import { calculateExperienceYears } from '@/utils';

const workStartDate = '2019-09-01';

const AboutMe: FunctionComponent = () => {
    // Whole years only, so the prerendered text rarely differs from the client's.
    const yearsOfExperience = Math.floor(
        calculateExperienceYears(workStartDate),
    );

    return (
        <section
            aria-labelledby="about-title"
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
            <div className="lg:col-span-5">
                <SectionTitle id="about-title" title="About me" />
                <p className="mt-6 type-lede text-slate">
                    I’m an AI-enabled full-stack engineer with over{' '}
                    {yearsOfExperience} years of experience building web and
                    mobile apps.
                </p>
                <div className="mt-5 flex max-w-[60ch] flex-col gap-4 type-body text-slate/80">
                    <p>
                        AI is part of how I work every day. I use coding agents
                        like Claude Code and Cursor to plan, build, review and
                        ship faster, while I stay accountable for the
                        architecture and code quality. I also build AI into
                        products with the Claude and OpenAI APIs.
                    </p>
                    <p>
                        I own delivery from first requirements to store
                        releases, and I’ve led teams on products like Hohm
                        Energy, ReAlpha and ScoutX. My core stack is TypeScript,
                        React, React Native, Next.js and Node.js.
                    </p>
                </div>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
                <h3 className="type-heading text-ink">Skills and tools</h3>
                <div className="mt-5">
                    <Skills />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
