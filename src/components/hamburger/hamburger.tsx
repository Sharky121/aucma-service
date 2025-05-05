import styles from './hamburger.module.scss';

interface HamburgerProps {
    color?: string;
}

const Hamburger = ({ color = 'var.$brand-black' }: HamburgerProps) => {
    return (
        <>
            <div className={styles.hamburgerMenu}>
                <span className='visually-hidden'>Меню</span>
            </div>
        </>
    )
}

export default Hamburger;