import { FunctionComponent } from 'react';

interface SecondaryTextProps {
    text: string;
    styleClass?: string;
}

const SecondaryText: FunctionComponent<SecondaryTextProps> = ({
    text,
    styleClass,
}) => {
    return <div className={`text-gray opacity-70 ${styleClass}`}>{text}</div>;
};

export default SecondaryText;
