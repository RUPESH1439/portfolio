import { FunctionComponent, RefObject } from 'react';

interface TextAreaProps {
    label?: string;
    _ref?: RefObject<HTMLTextAreaElement | null>;
}

const TextArea: FunctionComponent<TextAreaProps> = ({ label, _ref }) => {
    return (
        <div className="flex flex-1 flex-col gap-2 text-gray">
            {label ? <label>{label}</label> : null}
            <textarea
                ref={_ref}
                className="outline-0 bg-primary-medium max-w-sm text-gray py-2 h-32 max-h-32 rounded-lg px-2 hover:border hover:border-primary/50 focus:border-primary/50"
            ></textarea>
        </div>
    );
};

export default TextArea;
