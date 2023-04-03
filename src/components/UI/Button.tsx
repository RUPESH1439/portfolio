import { useSpring, animated } from '@react-spring/web';
import { FunctionComponent, ReactNode, useMemo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'outlined' | 'none' | 'underlined';
    title: string;
    styleClassName?: string;
    children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
    variant,
    title,
    styleClassName,
    children,
    ...rest
}) => {
    const [styleBorder, animateBorder] = useSpring(() => ({ width: '6' }), []);

    const colors = useMemo(() => {
        let bg = '';
        let textColor = '';
        switch (variant) {
            case 'primary':
                bg = 'bg-purple-light';
                textColor = 'text-primary';
                break;
            case 'secondary':
                bg = 'bg-secondary';
                textColor = '';
                break;
            case 'underlined':
                textColor = 'text-gray';
            default:
                break;
        }
        return { bg, textColor };
    }, [variant]);
    return (
        <button
            className={`flex flex-col items-start ${colors.bg} ${styleClassName}`}
            onMouseEnter={() => {
                if (variant !== 'none') return;
                animateBorder({
                    width: '140px',
                    from: {
                        width: '0px',
                    },
                    config: {
                        duration: 300,
                        mass: 5,
                        friction: 120,
                        tension: 120,
                    },
                });
            }}
            onMouseLeave={() => {
                if (variant !== 'none') return;

                animateBorder({
                    width: '0px',
                    from: {
                        width: '140px',
                    },
                    config: {
                        duration: 300,
                        mass: 5,
                        friction: 120,
                        tension: 120,
                    },
                });
            }}
            {...rest}
        >
            <div
                className={`flex flex-row items-center ${
                    variant === 'underlined' ? 'underline' : ''
                }`}
            >
                <span className={`${colors.textColor} mr-2 text-md`}>
                    {title}
                </span>
                {children ? children : null}
            </div>

            {variant === 'none' ? (
                <animated.div
                    style={styleBorder}
                    className="h-[1px] opacity-40 bg-primary mt-2"
                ></animated.div>
            ) : null}
        </button>
    );
};

export default Button;
