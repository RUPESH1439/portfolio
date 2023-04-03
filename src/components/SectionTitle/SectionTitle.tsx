import { FunctionComponent } from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title }) => {
    return (
        <div className="text-lg md:text-2xl font-bold text-primary font-light">
            {title}
        </div>
    );
};

export default SectionTitle;
