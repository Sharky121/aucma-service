'use client';

import { repairsIso, repairsSemi } from "@/data/repairs";

import Image from 'next/image';

import Container from "../container/container";
import Heading from "../heading/heading";

import styles from './works-section.module.scss';
import { useEffect, useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import CallbackModal from "../callback-modal/callback-modal";

const WorksSection = () => {
    const [activeTab, setActiveTab] = useState('repairsIso');
    const [activeRepair, setActiveRepair] = useState(repairsIso[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setActiveRepair(activeTab === 'repairsIso' ? repairsIso[0] : repairsSemi[0]);
    }, [activeTab]);

    const handleRepairClick = (item: { id: number; title: string; url: string }) => { 
        setActiveRepair(item);
    };

    const handleTabClick = (tab: 'repairsIso' | 'repairsSemi') => {
        setActiveTab(tab);
    };

    return (
        <section id="works" className={styles.works}>
            <Container customClassName={styles.works__container}>
                <Heading subtitle='Ремонт' title='Виды работ' customCssClass={styles.works__heading} />
            </Container>

            <div className={`${styles.works__tabs} ${styles.tabs}`}>
                <ul className={styles.tabs__list}>
                    <li className={styles.tabs__item}>
                        <Button customСlassName={`${styles.tabs__button} ${activeTab === 'repairsIso' ? styles.active : ''}`} onClick={() => handleTabClick('repairsIso')}>Изотермические фургоны</Button>
                    </li>
                    <li className={styles.tabs__item}>
                        <Button customСlassName={`${styles.tabs__button} ${activeTab === 'repairsSemi' ? styles.active : ''}`} onClick={() => handleTabClick('repairsSemi')}>Полуприцепы</Button>
                    </li>
                </ul>
            </div>

            <Container>
                <div className={`${styles.works__type} ${styles.worksTypes}`}>
                    <ul className={styles.worksTypes__list}>
                        {activeTab === 'repairsIso' ? repairsIso.map((item) => (
                            <li key={item.id} className={styles.worksTypes__item}>
                                <button className={`${styles.worksTypes__button} ${activeRepair.id === item.id ? styles.active : '' }`} onClick={() => handleRepairClick(item)}>{item.title}</button>
                            </li>
                        )) : repairsSemi.map((item) => (
                            <li key={item.id} className={styles.worksTypes__item}>
                                <button className={`${styles.worksTypes__button} ${activeRepair.id === item.id ? styles.active : '' }`} onClick={() => handleRepairClick(item)}>{item.title}</button>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.worksTypes__img}>
                        <Image src={`/${activeRepair.url}`}  width={320} height={210} unoptimized = {true} alt="Логотип Aucma обслуживание" />
                    </div>
                </div>
            </Container>

            <div className={`${styles.works__actions} ${styles.tabs}`}>
                <ul className={styles.tabs__list}>
                    <li className={styles.tabs__item}>
                        <Button color="danger" customСlassName={styles.tabs__button} onClick={handleOpenModal}>Рассчитать стоимость</Button>
                    </li>
                    <li className={styles.tabs__item}>
                        <Button customСlassName={styles.tabs__button} url="/price">Прайс-лист</Button>
                    </li>
                </ul>
            </div>

            {isModalOpen && (
                <Modal onClose={handleCloseModal} title="Рассчитать стоимость">
                    <CallbackModal />
                </Modal>
            )}
        </section>
    );
};

export default WorksSection;
