import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
        <Link href="/pricelist" className={styles.link}>
          Прайс-лист
        </Link>
        <Link href="/about" className={styles.link}>
          О нас
        </Link>
        <Link href="/contacts" className={styles.link}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header; 