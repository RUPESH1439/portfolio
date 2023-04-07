import { FunctionComponent, MutableRefObject } from 'react';

interface TextInputProps {
    label?: string;
    type?: string;
    _ref?: MutableRefObject<HTMLInputElement | null>;
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
                className="outline-0 text-sm bg-primary-medium font-normal max-w-sm h-10 rounded-lg px-2 text-gray hover:border-opacity-50 hover:border-[1px] focus:border-opacity-50 focus:border-primary hover:border-primary"
            ></input>
        </div>
    );
};

export default TextInput;
