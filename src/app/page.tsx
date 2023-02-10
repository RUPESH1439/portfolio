import { Inter } from '@next/font/google';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { AboutMe } from '@/components/AboutMe';
import { Component } from 'react';

const inter = Inter({ subsets: ['latin'] });

const sections = [
    { id: 'about', Component: AboutMe },
    { id: 'experience', Component: AboutMe },
    { id: 'work', Component: AboutMe },
    { id: 'contact', Component: AboutMe },
];

export default function Home() {
    return (
        <div
            className="bg-background w-full h-[100vh] overflow-scroll"
            style={{ scrollBehavior: 'smooth' }}
        >
            <NavBar />
            <div className="px-20 py-5">
                <div id="heroSection" className="mb-[25%]">
                    <HeroSection />
                </div>

                {sections.map(({ id, Component }) => (
                    <section className="h-[90vh]" key={id}>
                        <div id={id} className="pt-20">
                            <Component />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
