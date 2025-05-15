'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input';
import Container from '../container/container';
import Button from '../button/button';

import styles from './question-section.module.scss';
import Heading from '../heading/heading';
import Modal from '../modal/modal';
import ModalStatus from '../modal/modal-status';

interface IQuestionSection {
    customClassName?: string;
    variant?: 'default' | 'dark';
}

const QuestionSection = ({customClassName, variant = 'default'}: IQuestionSection) => {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(''); // Для отображения сообщений пользователю
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPhone(evt.target.value);
    };

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (!phone.trim()) {
            setMessage('Пожалуйста, введите номер телефона.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/send-callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone }),
            });

            const result = await response.json();

            if (response.ok) {
                handleOpenModal()
                setMessage('Спасибо! Ваш запрос отправлен. Мы скоро свяжемся с вами.');
                setPhone(''); // Очистить поле после успешной отправки
            } else {
                setMessage(result.error || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            setMessage('Произошла сетевая ошибка. Пожалуйста, проверьте ваше подключение и попробуйте позже.');
        }
        setIsLoading(false);
    };

    const questionSectionCssClass = [
        styles.questions,
        styles[`questions--${variant}`],
        customClassName
    ].join(' ');
    
    return (
        <section className={questionSectionCssClass}>
            <Container customClassName={styles.questions__container}>
                <Heading subtitle='Поддержка 24/7' title='Остались вопросы?' customCssClass={styles.questions__heading}>
                    Если у вас остались вопросы или требуется дополнительная информация, не стесняйтесь обращаться к нам. Мы всегда рады помочь вам и готовы ответить на все ваши запросы!
                </Heading>

                <form className={styles.questionsForm} onSubmit={handleSubmit}>
                    <div className={styles.questionsForm__field}>
                        <FormInput name='phone' label='  Ваш номер телефона' onChange={handleInputChange} />
                    </div>
                    {
                        isLoading ? (
                            <p className={styles.questionsForm__loading}>Отправка сообщение...</p>
                        ) : (
                            <Button type='submit' color="danger" customСlassName={styles.questionsForm__submit}>Давайте поговорим!</Button>
                        )
                    }
                </form>
            </Container>

            {isModalOpen && (
                <Modal onClose={handleCloseModal} title="Спасибо!">
                    <ModalStatus text={message} />
                </Modal>
            )}
        </section>
    )
}

export default QuestionSection;