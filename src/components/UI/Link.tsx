import { FunctionComponent } from 'react';

interface LinkProps {
    link: string;
    children: React.ReactNode;
    styleClass?: string;
}

const Link: FunctionComponent<LinkProps> = ({ link, children, styleClass }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`text-primary ${styleClass}`}
        >
            {children}
        </a>
    );
};

export default Link;
