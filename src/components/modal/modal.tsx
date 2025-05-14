'use client';

// import Button from '../button/button';
import Portal from '../portal/portal';
import styles from './modal.module.scss';

type ModalType = {
    children: string | JSX.Element | JSX.Element[];
    onClose: () => void;
    title: string;
    type?: string;
    isCloseButton?: boolean;
}

// const ButtonParams = {
//     color: 'primary',
//     size: 'flex',
//     title: 'Закрыть',
//     customClassName: styles.calculationFormButton
// }

const Modal = ({children, onClose, title, type, isCloseButton = true}: ModalType) => {
    const typeToClass: {
        [key: string]: string
    } = {
        "status": styles.modalStatus
    }

    return (
        <Portal>
            <>
                <div className={styles.modalBackdrop} onClick={onClose}></div>
                <div className={`${styles.modal} ${type ? typeToClass[type] :  ''}`}>
                    <div className={styles.modalWrapper}>
                        <button className={styles.modalClose} onClick={onClose}>
                            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
                                <use xlinkHref="#ico-cross" x="0" y="0"></use>
                            </svg>
                        </button>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>{title}</h3>
                        </div>
                        <div className={styles.modalBody}>
                            {children}
                        </div>
                        {
                            isCloseButton && (
                                <div className={styles.modalFooter}>
                                    {/* <Button {...ButtonParams} onClick={onClose} type='button'/> */}
                                </div>
                            )
                        }
                    </div>
                </div>            
            </>
        </Portal>
    )
}

export default Modal;