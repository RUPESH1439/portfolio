import { ContactMe } from '@/components/ContactMe';

export default function About() {
    return (
        <div className="flex py-12 md:py-20 px-5 md:px-12">
            <div id="contentMeSection" className="mt-16">
                <ContactMe />
            </div>
        </div>
    );
}
