/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { SectionTitle } from '../SectionTitle';
import { Skills } from '../Skills';

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
    return (
        <div className="flex flex-1 flex-col">
            <SectionTitle title="About Me" />

            <div className="flex flex-row">
                <div className="w-full pr-12 md:w-1/2 mt-4 md:mt-10">
                    <span className="text-sm md:text-md text-gray opacity-60">
                        Hi!
                        <br /> My name is Rupesh Shrestha. I'm a highly skilled
                        full-stack software engineer with over 3.5 years of
                        experience architecting and developing robust and
                        scalable web and mobile applications.
                        <br /> <br /> I have a track record of success in a wide
                        range of projects, including Gocchii and ReAlpha. And,
                        I'm well-versed in a variety of programming languages
                        and tools, including TypeScript, Node.js, Ruby, React,
                        React Native, Next.js, and Redux. I'm able to take full
                        ownership of delivering a project from start to finish.
                    </span>
                    <div className="mt-5">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
