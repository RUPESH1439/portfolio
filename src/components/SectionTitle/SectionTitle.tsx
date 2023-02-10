import { FunctionComponent } from 'react';

interface SectionTitleProps {
    index: number;
    title: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    index,
    title,
}) => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <span className="text-xl font-bold text-orange-dark">
                0{index}.
            </span>
            <span className="text-xl font-bold text-gray font-light">
                {title}
            </span>
            <span className="bg-gray w-56 h-[0.05em] ml-2 opacity-40" />
        </div>
    );
};

export default SectionTitle;
