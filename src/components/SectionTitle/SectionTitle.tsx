import { FunctionComponent } from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title }) => {
    return (
        <span className="text-2xl font-bold text-primary font-light">
            {title}
        </span>
    );
};

export default SectionTitle;
