'use client';

import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/button/button';
import Container from '@/components/container/container';
import Modal from '@/components/modal/modal';
import CallbackModal from '@/components/callback-modal/callback-modal';

import { prices } from '@/data/prices';

import styles from './price-table.module.scss';

type PriceItem = {
    title: string;
    value: number;
};

const PriceTable = () => {
    const [priceTable, setPriceTable] = useState<PriceItem[]>([]);
    const [activeTab, setActiveTab] = useState<'izo' | 'semi'>('izo');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const toggleTableHandle = useCallback((type: 'izo' | 'semi') => {
        const items = prices.find(item => item.type === type)?.items || [];
        setPriceTable(items);
        setActiveTab(type);
      }, []);

    useEffect(() => {
        toggleTableHandle('izo');
    }, [toggleTableHandle]);

    return (
        <>
            <div className={`${styles.price__tabs} ${styles.tabs}`}>
                <ul className={styles.tabs__list}>
                    <li className={styles.tabs__item}>
                        <Button customСlassName={`${styles.tabs__button} ${activeTab === 'izo' ? styles.active : ''}`} onClick={() => toggleTableHandle('izo')}>Изотермические фургоны</Button>
                    </li>
                    <li className={styles.tabs__item}>
                        <Button customСlassName={`${styles.tabs__button} ${activeTab === 'semi' ? styles.active : ''}`} onClick={() => toggleTableHandle('semi')}>Полуприцепы</Button>
                    </li>
                </ul>
            </div>

            <Container>
                <div className={styles.price__table}>
                    <table className={styles.priceTable}>
                    <thead className={styles.priceTable__head}>
                        <tr className={styles.priceTable__tr}>
                        <th className={styles.priceTable__th}>Услуга</th>
                        <th className={styles.priceTable__th}>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            priceTable.map((item, index) => (
                                <tr key={`${item.title}-${index}`} className={styles.priceTable__tr}>
                                    <td className={styles.priceTable__td}>{item.title}</td>
                                    <td className={styles.priceTable__td}>{item.value.toLocaleString('ru-RU')}&nbsp;&#x20BD;</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>

                <Button customСlassName={styles.price__calc} color='danger' onClick={handleOpenModal}>Рассчитать стоимость</Button>
            </Container>

            {isModalOpen && (
                <Modal onClose={handleCloseModal} title="Рассчитать стоимость">
                    <CallbackModal />
                </Modal>
            )}
        </>
    )
}

export default PriceTable;