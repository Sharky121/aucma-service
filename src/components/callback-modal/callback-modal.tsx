import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import FormInput from '../form-input/form-input';
import styles from './callback-modal.module.scss';
import Button from '../button/button';
import ModalStatus from '../modal/modal-status';

const CallbackModal = () => {
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (showStatus) {
            timer = setTimeout(() => {
                setShowStatus(false);
            }, 5000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [showStatus]);

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPhone(evt.target.value);
    };

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsLoading(true);

        if (!phone.trim()) {
            setStatusMessage('Пожалуйста, введите номер телефона.');
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
                setStatusMessage('Спасибо! Ваш запрос отправлен. Мы скоро свяжемся с вами.');
                setPhone('');
            } else {
                setStatusMessage(result.error || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            setStatusMessage('Произошла сетевая ошибка. Пожалуйста, проверьте ваше подключение и попробуйте позже.');
        }
        
        setShowStatus(true);
        setIsLoading(false);
    };

    return (
        <>
            {
                showStatus 
                ?
                    <ModalStatus text={statusMessage} />
                :
                    <>
                        <div className={styles.callbackModal}>
                            <p className={styles.callbackModal__description}>Оставьте ваш номер телефона и мы перезвоним вам в течение ближайшего времени!</p>
                            <form className={styles.callbackModal__form} onSubmit={handleSubmit}>
                                <div className={styles.callbackModal__field}>
                                    <FormInput 
                                        name='phone' 
                                        label='Ваш номер телефона' 
                                        value={phone}
                                        onChange={handleInputChange} 
                                        type="tel"
                                        isRequired
                                        mask='+7 ### ### ## ##'
                                    />
                                </div>
                                <div className={styles.callbackModal__submit}>
                                    <Button type='submit' color="danger" disabled={isLoading}>
                                        {isLoading ? 'Отправка...' : 'Отправить'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </>

    );
};

export default CallbackModal;