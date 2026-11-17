import { FunctionComponent, ReactNode } from 'react';

interface PageShellProps {
    children: ReactNode;
}

/** Spacing for the standalone pages (About, Projects, Contact). */
const PageShell: FunctionComponent<PageShellProps> = ({ children }) => {
    return (
        <div className="px-5 pt-32 pb-24 md:px-12 md:pt-36 lg:pr-28 lg:pl-16 2xl:px-36">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </div>
    );
};

export default PageShell;
