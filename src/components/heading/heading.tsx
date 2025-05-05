import styles from './heading.module.scss';

interface IHeading {
    subtitle: string;
    title: string;
    children: string;
    customCssClass: string;
}

const Heading = ({subtitle, title, children, customCssClass = ''}: IHeading) => {
    return (
        <div className={`${styles.heading} ${customCssClass}`}>
            <p className={styles.heading__subtitle}>{subtitle}</p>
            <h2 className={styles.heading__title}>{title}</h2>
            {
                children && (
                    <p className={styles.heading__desc}>
                        {children}
                    </p>
                )
            }
        </div>
    )
}

export default Heading;