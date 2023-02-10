import { FunctionComponent } from 'react';

interface SecondaryTextProps {
    text: string;
    styleClass?: string;
}

const SecondaryText: FunctionComponent<SecondaryTextProps> = ({
    text,
    styleClass,
}) => {
    return (
        <div
            className={`text-gray opacity-40 w-full mt-10 md:w-[40%] ${styleClass}`}
        >
            {text}
        </div>
    );
};

export default SecondaryText;
