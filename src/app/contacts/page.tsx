import QuestionSection from '@/components/question-section/question-section';
import styles from './page.module.scss';
import Container from '@/components/container/container';
import Heading from '@/components/heading/heading';
import { contacts } from '@/data/config';
import MapWrapper from '@/components/yandexMap/MapWrapper';

export default function Contacts() {
  return (
    <main className={`${styles.body__main}`}>
      <section className={styles.contacts}>
        <Container customClassName={styles.contacts__container}>
          <div className={styles.contacts__col}>
            <Heading subtitle='Как нас найти' title='Контакты и реквизиты' customCssClass={styles.contacts__heading}>
              <p>Мы всегда готовы ответить на все ваши вопросы по нашим продуктам и услугам. Отправьте нам свой запрос через форму обратной связи или позвоните по указанному телефону.</p>
              <p>Полное наименование предприятия  Общество с ограниченной ответственностью «АВТОЛЮКС+». Сокращенное наименование предприятия ООО «АТОЛЮКС»</p>
            </Heading>

            <div className={`${styles.contacts__description} ${styles.contactsDescription}`}>
              <dl className={styles.contactsDescription__list}>
                {contacts.map((contact, index) => (
                    <div key={index} className={styles.contactsDescription__item}>
                      <dt className={styles.contactsDescription__term}>{contact.title}</dt>
                      <dd className={styles.contactsDescription__desc}>
                        {contact.href ? (
                          <a href={contact.href} className={styles.contactsDescription__desc}>{contact.value}</a>
                        ) : (
                          contact.value
                        )}
                      </dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>

          <div className={styles.contacts__col}>
            <MapWrapper customCssClass={styles.contacts__map} />
          </div>
        </Container>
      </section>

      <QuestionSection />
    </main>
  );
} 