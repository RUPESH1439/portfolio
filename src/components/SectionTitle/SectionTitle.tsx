import { FunctionComponent } from 'react';

interface SectionTitleProps {
    title: string;
    id?: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title, id }) => {
    return (
        <h2 id={id} className="type-title text-ink">
            {title}
        </h2>
    );
};

export default SectionTitle;
