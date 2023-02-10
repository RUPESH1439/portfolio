import { FunctionComponent } from 'react';

interface PrimaryTextProps {
    text: string;
    styleClass?: string;
}

const PrimaryText: FunctionComponent<PrimaryTextProps> = ({
    text,
    styleClass,
}) => {
    return (
        <div
            className={`text-orange-dark opacity-40 w-full mt-10 md:w-[40%] ${styleClass}`}
        >
            {text}
        </div>
    );
};

export default PrimaryText;
