import { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from '../form-input/form-input';
import styles from './callback-modal.module.scss';
import Button from '../button/button';

const CallbackModal = () => {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(''); // Для отображения сообщений пользователю
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className={styles.callbackModal}>
            <p className={styles.callbackModal__description}>Оставьте ваш номер телефона и мы перезвоним вам в течение ближайшего времени!</p>
            <form className={styles.callbackModal__form} onSubmit={handleSubmit}>
                <div className={styles.callbackModal__field}>
                    <FormInput 
                        name='phone' 
                        label='Ваш номер телефона' 
                        value={phone} // Связываем с состоянием
                        onChange={handleInputChange} 
                        type="tel" // Улучшаем семантику и UX для телефонных номеров
                        isRequired // Делаем поле обязательным
                    />
                </div>

                <div className={styles.callbackModal__submit}>
                    <Button type='submit' color="danger" disabled={isLoading}>
                        {isLoading ? 'Отправка...' : 'Отправить'}
                    </Button>
                </div>
                {message && <p className={styles.callbackModal__message}>{message}</p>}
            </form>
        </div>
    );
};

export default CallbackModal;