import NextLink from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import { buttonClasses, ButtonVariant } from '@/cssClasses';

interface LinkButtonProps {
    href: string;
    variant?: ButtonVariant;
    className?: string;
    children: ReactNode;
}

/** An internal link that looks like a button. */
const LinkButton: FunctionComponent<LinkButtonProps> = ({
    href,
    variant = 'solid',
    className = '',
    children,
}) => {
    return (
        <NextLink href={href} className={buttonClasses(variant, className)}>
            {children}
        </NextLink>
    );
};

export default LinkButton;
