import Link from 'next/link';
import styles from './button.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: ButtonSize;
    color?: ButtonColor;
    url?: string;
    customСlassName?: string;
}

const Button = ({url = '', children, size = 'medium', color = 'primary', customСlassName = '', ...props}: IButton) => {

    const buttonClasses = [
        styles.button,
        styles[`button--${size}`],
        styles[`button--${color}`],
        customСlassName,
    ].filter(Boolean).join(' ');

    if (url) {
        return (
            <Link className={buttonClasses} href={url}>
                <span className={styles.button__text}>{children}</span>
            </Link>
        )
    }

    return (
        <button className={buttonClasses} {...props}>
            <span className={styles.button__text}>{children}</span>
        </button>
    )
}

export default Button;