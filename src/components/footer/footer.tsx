'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/container/container';
import Modal from '@/components/modal/modal';
import CallbackModal from '@/components/callback-modal/callback-modal';
import Button from '@/components/button/button';

import { menu } from '@/data/menu';
import { addressLine, email, phone } from '@/data/config';

import styles from './footer.module.scss';

interface IFooter {
  customClassName?: string;
}

const Footer = ({customClassName}: IFooter) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                menu.map((item: {title: string; url: string},index) => (
                  <li key={index + item.title} className={styles.footerNavItem}>
                    <Link className={styles.footerNavLink} href={item.url}>{item.title}</Link>
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
                <dd className={styles.footerContactsDesc}><a href={`tel:+${phone.href}`}><b>{phone.value}</b></a></dd>
                <dd className={styles.footerContactsDesc}><a href={`mailto:${email.href}`}>{email.value}</a></dd>
              </div>
              <div className={styles.footerContactsItem}>
                <dt className={styles.footerContactsTerm}>Адрес</dt>
                <dd className={styles.footerContactsDesc}>{addressLine}</dd>
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
              <Button type='button' color="danger" customСlassName={styles.footerCallbackButton} onClick={handleOpenModal}>Требуется ремонт</Button>
          </div>    

          <p className={styles.footerCopyright}>&copy; Autolux. Все права защищены</p>

      </Container>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} title="Требуется ремонт">
          <CallbackModal />
        </Modal>
      )}
    </footer>
  );
};

export default Footer; 