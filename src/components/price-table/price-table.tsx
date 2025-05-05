'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './price-table.module.scss';

import { prices } from '@/data/prices';
import Button from '../button/button';

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

    const isActiveTab = (tabType: 'izo' | 'semi') => tabType === activeTab;

    return (
        <>
            <div className={styles.price__tab}>
                <ul className={styles.priceTab__list}>
                    {['izo', 'semi'].map((tab) => (
                        <li 
                            key={tab}
                            className={`${styles.priceTab__item} ${
                                isActiveTab(tab as 'izo' | 'semi') ? styles.priceTab__itemActive : ''
                            }`}
                        >
                            <Button 
                                color='danger' 
                                customСlassName={styles.priceTab__button} 
                                onClick={() => toggleTableHandle(tab as 'izo' | 'semi')}
                            >
                                {tab === 'izo' ? 'Изотермические фургоны' : 'Полуприцепы'}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

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
        </>
    )
}

export default PriceTable;