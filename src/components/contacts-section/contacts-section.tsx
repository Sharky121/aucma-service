import Container from "../container/container";
import Heading from "../heading/heading";
import MapWrapper from "../yandexMap/MapWrapper";
import Button from "../button/button";

import styles from './contacts-section.module.scss';

const ContactsSection = () => {
    return (
        <section className={`${styles.pageHome__contacts} ${styles.contacts}`}>
            <Container customClassName={styles.contacts__container}>
                <div className={styles.contacts__col}>
                    <Heading subtitle='Маршрут' title='Как с нами связаться' customCssClass={styles.contacts__heading}>
                        <p>Мы всегда готовы ответить на все ваши вопросы по нашим продуктам и услугам. Отправьте нам свой запрос через форму обратной связи или позвоните по указанному телефону.</p>
                    </Heading>
                    <div className={styles.contacts__description}>
                        <dl className={styles.contactsDescription__list}>
                            <div className={styles.contactsDescription__item}>
                                <dt className={styles.contactsDescription__term}>Телефон</dt>
                                <dd className={styles.contactsDescription__desc}>+7 (495) 123-45-67</dd>
                            </div>
                            <div className={styles.contactsDescription__item}>
                                <dt className={styles.contactsDescription__term}>Адрес</dt>
                                <dd className={styles.contactsDescription__desc}>2-я Институтская ул., 7, корп. 3</dd>
                            </div>
                        </dl>
                    </div>   
                    <Button type='button' color="danger" customСlassName={styles.contacts__more}>Подробнее о нас</Button>
                </div>
                <div className={styles.contacts__col}>
                    <MapWrapper customCssClass={styles.contacts__map} />
                </div>
      
            </Container>
        </section>
    )
}

export default ContactsSection;