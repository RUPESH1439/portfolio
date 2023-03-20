'use client';
import { AboutMe } from '@/components/AboutMe';

export default function Home() {
    return (
        <div className="flex flex-1 px-20 py-5">
            <div id="heroSection" className="mt-16">
                <AboutMe />
            </div>
        </div>
    );
}
