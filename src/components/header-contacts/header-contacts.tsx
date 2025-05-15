'use client';

import { useState } from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import styles from './header-contacts.module.scss';
import CallbackModal from '../callback-modal/callback-modal';
import { addressLine, phone } from '@/data/config';
import Link from 'next/link';

interface IHeaderContacts {
    customClass?: string;
}

const HeaderContacts = ({customClass}: IHeaderContacts) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        <div className={`${styles.headerContacts} ${customClass}`}>
            <a className={styles.headerContacts__mobilePhone} href={`tel:+${phone.href}`}>
                <svg viewBox="0 0 24 24" height={26} width={26}>
                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
            </a>

            <div className={styles.headerContacts__info}>
                <Link className={styles.headerContacts__desktopPhone} href={`tel:+${phone.href}`}>{phone.value}</Link>
                <address className={styles.headerContacts__address}>{addressLine}</address>
            </div>
            
            <div className={styles.headerContacts__callback}>
                <Button type='button' color="danger" size='small' onClick={handleOpenModal}>Перезвоните</Button>
            </div>    

            {isModalOpen && (
                <Modal onClose={handleCloseModal} title="Обратный звонок">
                    <CallbackModal />
                </Modal>
            )}
        </div>
    )
}

export default HeaderContacts;