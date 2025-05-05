import Link from 'next/link';
import styles from './nav.module.scss';
import { menu } from '@/data/menu';

interface INav {
  customClass?: string;
}

const Nav = ({customClass}: INav) => {
    return (
        <nav className={`${styles.nav} ${customClass}`}>
            <ul className={styles.navList}>
              {
                menu.map((item: {title: string; link: string},index) => (
                  <li key={index + item.title} className={styles.navItem}>
                    <Link className={styles.navItemLink} href={item.link}>{item.title}</Link>
                  </li>
                ))
              }
            </ul>
        </nav>
    )
}

export default Nav;