import { faq } from "@/data/faq";
import Container from "../container/container";
import Heading from "../heading/heading";
import Accordion from "../accordion/accordion";

import styles from './faq-section.module.scss';

const FaqSection = () => {
    return (
        <section className={`${styles.pageHome__faq} ${styles.faq}`}>
            <Container customClassName={styles.faq__container}>
                <Heading subtitle='FAQ' title='Часто задаваемые вопросы' customCssClass={styles.faq__heading} />
                <div className={styles.faq__content}>
                    <ul className={styles.faq__list}>
                        {faq.map((item) => (
                            <li key={item.id} className={styles.faq__item}>
                                <Accordion title={item.question} content={item.answer} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default FaqSection;