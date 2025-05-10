import QuestionSection from '@/components/question-section/question-section';
import Container from '@/components/container/container';
import Heading from '@/components/heading/heading';
import Button from '@/components/button/button';
import PriceTable from '@/components/price-table/price-table';

import styles from './page.module.scss';

export default function Price() {
  return (
    <main className={`${styles.body__main}`}>
      <section className={styles.price}>
        <Container customClassName={styles.price__container}>
          <Heading subtitle='Цены на услуги' title='Прайс-лист на услуги' customCssClass={styles.price__heading}>
              Все работы выполняются по заводским технологиям с использованием оригинальных комплектующих и, рекомендованных заводом изготовителем, расходных материалов.
          </Heading>
        </Container>
          
        <PriceTable />
        
        <Container>
          <Button customСlassName={styles.price__calc} color='danger'>Рассчитать стоимость</Button>
        </Container>
      </section>

      <QuestionSection variant='dark'/>
    </main>
  );
} 