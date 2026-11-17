const hoverText = 'transition hover:ease-in-out delay-5';

const hoverTranslate =
    'transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110';

type ButtonVariant = 'solid' | 'outline' | 'quiet';

const buttonBase =
    'inline-flex items-center justify-center gap-2 rounded-full type-button transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const buttonVariants: Record<ButtonVariant, string> = {
    solid: 'h-12 px-6 bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active',
    outline:
        'h-11 px-4 md:px-5 border border-primary/60 text-primary hover:bg-primary/10 hover:border-primary',
    quiet: 'h-12 px-2 text-slate hover:text-ink underline decoration-haze/40 underline-offset-8 hover:decoration-primary',
};

const buttonClasses = (variant: ButtonVariant, extra = '') =>
    `${buttonBase} ${buttonVariants[variant]} ${extra}`;

/** Small tag used for technologies and skills. */
const tagClasses =
    'inline-flex items-center rounded-md border border-haze/20 bg-tint px-2.5 py-1 type-caption text-slate/85';

/** Tag for AI tools: same shape as tagClasses, in the brand accent. */
const aiTagClasses =
    'inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 type-caption text-primary';

export { hoverText, hoverTranslate, buttonClasses, tagClasses, aiTagClasses };
export type { ButtonVariant };
