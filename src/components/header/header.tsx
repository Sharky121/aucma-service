import Container from '../container/container';
import Hamburger from '../hamburger/hamburger';
import HeaderContacts from '../header-contacts/header-contacts';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container customClassName={styles.headerContainer}>
        <Hamburger />
        <Logo customClass={styles.header__logo}/>
        <Nav customClass={styles.header__nav}/>
        <HeaderContacts customClass={styles.header__contacts}/>
      </Container>
    </header>
  );
};

export default Header; 