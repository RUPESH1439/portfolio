import { FunctionComponent, ButtonHTMLAttributes } from 'react';
import { buttonClasses, ButtonVariant } from '@/cssClasses';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const Button: FunctionComponent<ButtonProps> = ({
    variant = 'solid',
    className = '',
    type = 'button',
    children,
    ...rest
}) => {
    return (
        <button
            type={type}
            className={buttonClasses(variant, className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
