'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './price-table.module.scss';

import { prices } from '@/data/prices';
import Button from '../button/button';
import Container from '../container/container';

type PriceItem = {
    title: string;
    value: number;
};

const PriceTable = () => {
    const [priceTable, setPriceTable] = useState<PriceItem[]>([]);
    const [activeTab, setActiveTab] = useState<'izo' | 'semi'>('izo');

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
            </Container>
        </>
    )
}

export default PriceTable;