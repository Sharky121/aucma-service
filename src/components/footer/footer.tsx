import Link from 'next/link';
import Image from 'next/image';
import Container from '../container/container';

import { menu } from '@/data/menu';

import styles from './footer.module.scss';
import Button from '../button/button';

interface IFooter {
  customClassName?: string;
}

const Footer = ({customClassName}: IFooter) => {
  return (
    <footer className={`${styles.footer} ${customClassName}`}>
      <Container customClassName={styles.footerContainer}>
          <Link className={styles.footerLogo} href={'/'}>
            <Image src="/logo_white.png" width={237} height={48} unoptimized = {true} alt="Логотип Aucma обслуживание"/>
          </Link>

          <p className={styles.footerDescription}>Техцентр AUCMA предлагает услуги по комплексному восстановительному ремонту рефрижераторных полуприцепов и изотермических фургонов.</p>

          <div className={styles.footerNav}>
            <ul className={styles.footerNavList}>
              {
                menu.map((item: {title: string; link: string},index) => (
                  <li key={index + item.title} className={styles.footerNavItem}>
                    <Link className={styles.footerNavLink} href={item.link}>{item.title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className={styles.footerContacts}>
            <dl className={styles.footerContactsList}>
              <div className={styles.footerContactsItem}>
                <dt className={styles.footerContactsTerm}>Адрес</dt>
                <dd className={styles.footerContactsDesc}>ООО «Автолюкс»</dd>
              </div>
              <div className={styles.footerContactsItem}>
                <dt className={styles.footerContactsTerm}>Контактные данные</dt>
                <dd className={styles.footerContactsDesc}><a href="tel:+74951362612"><b>+7 (495) 136-26-12</b></a></dd>
                <dd className={styles.footerContactsDesc}><a href="mailto:ooo.avtolyuks@list.ru">ooo.avtolyuks@list.ru</a></dd>
              </div>
              <div className={styles.footerContactsItem}>
                <dt className={styles.footerContactsTerm}>Адрес</dt>
                <dd className={styles.footerContactsDesc}>г. Москва, ул. Голубинская, <br />дом 4а, строение 1, 117574</dd>
              </div>
            </dl>
          </div>

          <div className={styles.footerSocial}>
            <h3 className={styles.footerSocialTitle}>Наши мессенджеры:</h3>
            <ul className={styles.footerSocialList}>
              <li className={styles.footerSocialItem}>
                <a className={`${styles.footerSocialItemLink} ${styles.footerSocialItemLinkTg}`} href="">
                  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                    <use xlinkHref="#ico-tg" x="0" y="0"></use>
                  </svg>
                </a>
              </li>
              <li className={styles.footerSocialItem}>
                <a className={`${styles.footerSocialItemLink} ${styles.footerSocialItemLinkWa}`} href="">
                  <svg viewBox="0 0 20 20" width="24" height="24" aria-hidden="true" focusable="false">
                    <use xlinkHref="#ico-wa" x="0" y="0"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCallback}>
              <Button type='button' color="danger" customСlassName={styles.footerCallbackButton}>Требуется ремонт</Button>
          </div>    

          <p className={styles.footerCopyright}>&copy; Autolux. Все права защищены</p>

      </Container>
    </footer>
  );
};

export default Footer; 