import {
    HeroSection,
    AboutMe,
    Carousel,
    HighlightedProjects,
} from '@/components';
import { ContactMe } from '@/components/ContactMe';
import { CarouselSection } from '@/components/Carousel/Carousel';

const sections: CarouselSection[] = [
    { key: 'intro', label: 'Intro', Component: HeroSection },
    { key: 'about', label: 'About', Component: AboutMe },
    { key: 'work', label: 'Work', Component: HighlightedProjects },
    { key: 'contact', label: 'Contact', Component: ContactMe },
];

export default function Home() {
    return <Carousel sections={sections} />;
}
