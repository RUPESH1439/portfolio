import { FunctionComponent, MutableRefObject } from 'react';

interface TextAreaProps {
    label?: string;
    _ref?: MutableRefObject<HTMLTextAreaElement | null>;
}

const TextArea: FunctionComponent<TextAreaProps> = ({ label, _ref }) => {
    return (
        <div className="flex flex-1 flex-col gap-2 text-gray">
            {label ? <label>{label}</label> : null}
            <textarea
                ref={_ref}
                className="outline-0 bg-primary-medium max-w-sm text-gray py-2 h-32 max-h-32 rounded-lg px-2 hover:border-opacity-50 hover:border-[1px] focus:border-opacity-50 focus:border-primary hover:border-primary"
            ></textarea>
        </div>
    );
};

export default TextArea;
