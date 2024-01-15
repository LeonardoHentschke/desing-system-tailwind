export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
    if (disabled) {
        return 'bg-disabled text-disabled';
    }

    switch (variant) {
        case 'primary':
            return 'bg-primary text-white';
        case 'secondary':
            return 'bg-quaternary text-primary';
        case 'tertiary':
        default:
            return '';
    }
}

const Button = ({ variant = 'primary', children, className, disabled, ...props }: ButtonProps) => {
    return (
        <button
            className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
