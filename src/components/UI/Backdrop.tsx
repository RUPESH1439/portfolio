import { FunctionComponent } from 'react';

interface BackDropProps {}

const BackDrop: FunctionComponent<BackDropProps> = () => {
    return (
        <div className="absolute left-0 w-screen h-screen backdrop-blur-sm z-20" />
    );
};

export default BackDrop;
