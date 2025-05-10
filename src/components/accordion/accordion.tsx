'use client';

import { useState } from 'react';

import styles from './accordion.module.scss';

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__header} onClick={toggleAccordion}>
                <h3 className={styles.accordion__title}>{title}</h3>
                <span className={`${styles.accordion__icon} ${isOpen ? styles.isActive : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#ico-arrow"></use>
                    </svg>
                </span>
            </div>
            <div className={`${styles.accordion__content} ${isOpen ? styles.isActive : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Accordion; 