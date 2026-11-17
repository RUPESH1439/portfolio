import { FunctionComponent, InputHTMLAttributes } from 'react';
import { fieldClasses } from './fieldClasses';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
    id,
    label,
    error,
    type = 'text',
    ...rest
}) => {
    const errorId = `${id}-error`;
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="type-label text-gray">
                {label}
            </label>
            <input
                id={id}
                type={type}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`h-12 ${fieldClasses}`}
                {...rest}
            />
            {error ? (
                <p id={errorId} className="type-caption text-red">
                    {error}
                </p>
            ) : null}
        </div>
    );
};

export default TextInput;
