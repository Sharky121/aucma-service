import QuestionSection from '@/components/question-section/question-section';
import FeaturesSection from '@/components/features-section/features-section';
import ContactsSection from '@/components/contacts-section/contacts-section';
import FaqSection from '@/components/faq-section/faq-section';
import WorksSection from '@/components/works-section/works-section';
import VideoBackground from '@/components/video-background/video-background';

import styles from './page.module.scss';
import Container from '@/components/container/container';
import Button from '@/components/button/button';

export default function Home() {
  return (
    <main className={`${styles.body__main} ${styles.pageHome}`}>
      <section className={`${styles.pageHome__welcome} ${styles.welcome}`}>
        <VideoBackground videoId="1068079321" />
        <Container customClassName={styles.welcome__container}>
          <div className={styles.welcome__content}>
            <h1 className={styles.welcome__title}><span>Ремонт</span> рефрижераторных полуприцепов и изотермических фургонов</h1>
            <p className={styles.welcome__description}>
              Все работы выполняются по заводским технологиям с использованием оригинальных комплектующих и рекомендованных заводом изготовителем расходных материалов.
            </p>
            <Button color='danger' customСlassName={styles.welcome__button}>Требуется ремонт</Button>
          </div>
        </Container>
      </section>

      <WorksSection />
      <FeaturesSection />
      <FaqSection />
      <ContactsSection />
      <QuestionSection />
    </main>
  );
}
