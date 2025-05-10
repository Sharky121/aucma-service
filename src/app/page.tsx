import QuestionSection from '@/components/question-section/question-section';
import FeaturesSection from '@/components/features-section/features-section';
import ContactsSection from '@/components/contacts-section/contacts-section';

import styles from './page.module.scss';
import FaqSection from '@/components/faq-section/faq-section';

export default function Home() {
  return (
    <main className={`${styles.body__main} ${styles.pageHome}`}>
      <FeaturesSection />
      <FaqSection />
      <ContactsSection />
      <QuestionSection />
    </main>
  );
}
