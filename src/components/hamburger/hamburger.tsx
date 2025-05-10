import styles from './hamburger.module.scss';

const Hamburger = () => {
    return (
        <>
            <div className={styles.hamburgerMenu}>
                <span className='visually-hidden'>Меню</span>
            </div>
        </>
    )
}

export default Hamburger;