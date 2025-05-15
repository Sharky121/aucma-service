import Button from "../button/button";
import Container from "../container/container";
import Heading from "../heading/heading";

import styles from './features-section.module.scss';

interface IFeaturesSection {
    customClassName?: string;
}

const FeaturesSection = ({customClassName}: IFeaturesSection) => {
    return (
        <section className={`${styles.features} ${customClassName}`}>
            <Container customClassName={styles.features__container}>
                <div className={styles.features__content}> 
                    <Heading subtitle='О нас' title='Почему нас выбирают' customCssClass={styles.features__heading}>
                        Мы понимаем, что любой грузовик — это часть бизнеса, и его надежность напрямую влияет на успех. Поэтому мы уделяем особое внимание каждому техническому аспекту, начиная от замены деталей и заканчивая тщательной диагностикой. Клиенты отмечают нашу оперативность и высокую квалификацию специалистов, благодаря которым полуприцепы возвращаются в строй в кратчайшие сроки
                    </Heading>

                    <Button type='button' color="danger" url="/about" customСlassName={styles.features__more}>Подробнее о нас</Button>
                </div>

                <ul className={styles.features__list}>
                    <li className={`${styles.features__item} ${styles.feature}`}>
                        <div className={styles.feature__stats}>
                            <strong className={styles.feature__number}>2К+</strong>
                            <p className={styles.feature__label}>Счастливых клиентов</p>
                        </div>
                        <p className={styles.feature__desc}>Их положительные отзывы и повторные обращения вдохновляют нас на развитие, ведь мы стремимся к тому, чтобы каждая выполненная работа максимально удовлетворяла потребности наших заказчиков.</p>
                    </li>
                    <li className={`${styles.features__item} ${styles.feature}`}>
                        <div className={styles.feature__stats}>
                            <strong className={styles.feature__number}>4</strong>
                            <p className={styles.feature__label}>Сервисных центра</p>
                        </div>
                        <p className={styles.feature__desc}>Мы располагаем современным оборудованием и квалифицированными специалистами, которые способны выполнить диагностику, а также все необходимые ремонтные работы, начиная от мелкого ремонта и заканчивая капитальным обслуживанием.</p>
                    </li>
                    <li className={`${styles.features__item} ${styles.feature}`}>
                        <div className={styles.feature__stats}>
                            <strong className={styles.feature__number}>20+</strong>
                            <p className={styles.feature__label}>Многолетний опыт</p>
                        </div>
                        <p className={styles.feature__desc}>Мы быстро и эффективно диагностируем проблемы, предлагая наиболее оптимальные решения. Мы знаем все нюансы конструкции и эксплуатации полуприцепов, что помогает предотвращать возможные неисправности и увеличивать срок службы техники.</p>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default FeaturesSection;