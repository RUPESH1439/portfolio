import { FunctionComponent, TextareaHTMLAttributes } from 'react';
import { fieldClasses } from './fieldClasses';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label: string;
    error?: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
    id,
    label,
    error,
    ...rest
}) => {
    const errorId = `${id}-error`;
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="type-label text-gray">
                {label}
            </label>
            <textarea
                id={id}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`h-36 resize-none py-3 ${fieldClasses}`}
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

export default TextArea;
