/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { SectionTitle } from '../SectionTitle';
import { Skills } from '../Skills';
import { calculateExperienceYears } from '@/utils';

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
    const workStartDate = '2019-09-01';
    const yearsOfExperience = calculateExperienceYears(workStartDate);
    return (
        <div className="flex flex-1 flex-col">
            <div className="mt-10 lg:mt-0">
                <SectionTitle title="About Me" />
            </div>

            <div className="flex flex-row">
                <div className="w-full pr-12 lg:w-3/4 mt-4 md:mt-10">
                    <div className="text-sm md:text-base text-gray opacity-90">
                        Hi!
                        <br /> My name is Rupesh Shrestha. I'm a highly skilled
                        full-stack software engineer with over{' '}
                        {yearsOfExperience} years of experience architecting and
                        developing robust and scalable web and mobile
                        applications.
                        <br /> <br /> I have a track record of success in a wide
                        range of projects, including Gocchii and ReAlpha. And,
                        I'm well-versed in a variety of programming languages
                        and tools, including TypeScript, Node.js, Ruby, React,
                        React Native, Next.js, and Redux. I'm able to take full
                        ownership of delivering a project from start to finish.
                    </div>
                    <div className="mt-12">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
