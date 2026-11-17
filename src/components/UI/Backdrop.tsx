import { FunctionComponent } from 'react';

const BackDrop: FunctionComponent = () => {
    return (
        <div className="absolute left-0 w-screen h-screen backdrop-blur-xs z-20" />
    );
};

export default BackDrop;
