import { HighlightedProjects, Projects } from '@/components';

export default function ProjectsPage() {
    // if (typeof window === 'undefined') return null;
    return (
        <div className="py-20 md:py-20 px-5 md:px-12">
            <HighlightedProjects />
        </div>
    );
}
