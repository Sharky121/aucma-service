import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer; 