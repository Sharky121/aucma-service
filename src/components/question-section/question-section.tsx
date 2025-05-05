'use client';

import { useState } from 'react';

import FormInput from '../form-input/form-input';
import Container from '../container/container';
import Button from '../button/button';

import styles from './question-section.module.scss';
import Heading from '../heading/heading';

interface IQuestionSection {
    customClassName?: string;
    variant?: 'default' | 'dark';
}

const QuestionSection = ({customClassName, variant = 'default'}: IQuestionSection) => {
    const [formData, setFormData] = useState({
        formType: 'question',
        phone: '',
    });

    const questionSectionCssClass = [
        styles.questions,
        styles[`questions--${variant}`],
        customClassName
    ].join(' ');
    
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <section className={questionSectionCssClass}>
            <Container customClassName={styles.questions__container}>
                <Heading subtitle='Поддержка 24/7' title='Остались вопросы?' customCssClass={styles.questions__heading}>
                    Если у вас остались вопросы или требуется дополнительная информация, не стесняйтесь обращаться к нам. Мы всегда рады помочь вам и готовы ответить на все ваши запросы!
                </Heading>

                <form className={styles.questionsForm} action="">
                    <div className={styles.questionsForm__field}>
                        <FormInput name='phone' label='  Ваш номер телефона' onChange={handleInputChange} />
                    </div>

                    <Button type='button' color="danger" customСlassName={styles.questionsForm__submit}>Давайте поговорим!</Button>
                </form>
            </Container>
        </section>
    )
}

export default QuestionSection;