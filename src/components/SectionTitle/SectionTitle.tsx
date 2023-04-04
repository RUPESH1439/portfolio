import { FunctionComponent } from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title }) => {
    return (
        <div className="text-2xl md:text-3xl font-bold text-primary font-light">
            {title}
        </div>
    );
};

export default SectionTitle;
