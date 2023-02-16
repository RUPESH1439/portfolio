import { FunctionComponent } from 'react';

interface PrimaryTextProps {
    text: string;
    styleClass?: string;
}

const PrimaryText: FunctionComponent<PrimaryTextProps> = ({
    text,
    styleClass,
}) => {
    return <div className={`text-primary ${styleClass}`}>{text}</div>;
};

export default PrimaryText;
