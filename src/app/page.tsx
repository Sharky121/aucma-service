import QuestionSection from '@/components/question-section/question-section';
import FeaturesSection from '@/components/features-section/features-section';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={`${styles.body__main}`}>
      <FeaturesSection />
      <QuestionSection />
    </main>
  );
}
