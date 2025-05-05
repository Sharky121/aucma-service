import styles from './button.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: ButtonSize;
    color?: ButtonColor;
    customСlassName?: string;
}

const Button = ({children, size = 'medium', color = 'primary', customСlassName = '', ...props}: IButton) => {

    const buttonClasses = [
        styles.button,
        styles[`button--${size}`],
        styles[`button--${color}`],
        customСlassName,
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClasses} {...props}>
            <span className={styles.button__text}>{children}</span>
        </button>
    )
}

export default Button;