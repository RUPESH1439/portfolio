import { FunctionComponent, RefObject } from 'react';

interface TextInputProps {
    label?: string;
    type?: string;
    _ref?: RefObject<HTMLInputElement | null>;
}

const TextInput: FunctionComponent<TextInputProps> = ({
    label,
    type,
    _ref,
}) => {
    return (
        <div className="flex flex-1 flex-col gap-2 text-sm font-medium text-gray">
            {label ? <label>{label}</label> : null}
            <input
                type={type ?? 'text'}
                ref={_ref}
                className="outline-0 text-sm bg-primary-medium font-normal max-w-sm h-10 rounded-lg px-2 text-gray hover:border hover:border-primary/50 focus:border-primary/50"
            ></input>
        </div>
    );
};

export default TextInput;
