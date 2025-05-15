'use client';

import { useState } from "react";
import Button from "../button/button";
import Container from "../container/container";
import VideoBackground from "../video-background/video-background";

import styles from "./welcome-section.module.scss";
import CallbackModal from "../callback-modal/callback-modal";
import Modal from "../modal/modal";

const WelcomeSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return (
        <>  
            <section className={`${styles.pageHome__welcome} ${styles.welcome}`}>
                <VideoBackground videoId="1068079321" />
                <Container customClassName={styles.welcome__container}>
                    <div className={styles.welcome__content}>
                        <h1 className={styles.welcome__title}><span>Ремонт</span> рефрижераторных полуприцепов и изотермических фургонов</h1>
                        <p className={styles.welcome__description}>
                            Все работы выполняются по заводским технологиям с использованием оригинальных комплектующих и рекомендованных заводом изготовителем расходных материалов.
                        </p>
                        <Button color='danger' customСlassName={styles.welcome__button} onClick={handleOpenModal}>Требуется ремонт</Button>
                    </div>
                </Container>
            </section>

            {isModalOpen && (
                <Modal onClose={handleCloseModal} title="Требуется ремонт">
                    <CallbackModal />
                </Modal>
            )}
        </>

    );
}   

export default WelcomeSection;