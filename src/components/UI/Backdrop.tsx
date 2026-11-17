import { FunctionComponent } from 'react';

interface BackDropProps {
    open?: boolean;
    onClick?: () => void;
}

const BackDrop: FunctionComponent<BackDropProps> = ({
    open = true,
    onClick,
}) => {
    return (
        <div
            aria-hidden
            onClick={onClick}
            className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-500 ease-out-soft ${
                open ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
        />
    );
};

export default BackDrop;
