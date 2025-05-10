import QuestionSection from '@/components/question-section/question-section';
import FeaturesSection from '@/components/features-section/features-section';
import ContactsSection from '@/components/contacts-section/contacts-section';
import FaqSection from '@/components/faq-section/faq-section';
import WorksSection from '@/components/works-section/works-section';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={`${styles.body__main} ${styles.pageHome}`}>
      <WorksSection />
      <FeaturesSection />
      <FaqSection />
      <ContactsSection />
      <QuestionSection />
    </main>
  );
}
