import { FunctionComponent } from 'react';

interface LinkProps {
    link: string;
    children: React.ReactNode;
    styleClass?: string;
    ariaLabel?: string;
}

/** External link that opens in a new tab. */
const Link: FunctionComponent<LinkProps> = ({
    link,
    children,
    styleClass = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary',
    ariaLabel,
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={ariaLabel}
            className={styleClass}
        >
            {children}
        </a>
    );
};

export default Link;
