'use client';

import Portal from '../portal/portal';
import styles from './modal.module.scss';

type ModalType = {
    children: string | JSX.Element | JSX.Element[];
    onClose: () => void;
    title: string;
    type?: string;
}

const Modal = ({children, onClose, title}: ModalType) => {

    return (
        <Portal>
            <>
                <div className={styles.modalBackdrop} onClick={onClose}></div>
                <div className={styles.modal}>
                    <div className={styles.modalWrapper}>
                        <button className={styles.modalClose} onClick={onClose}>
                            <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true" focusable="false">
                                <use xlinkHref="#ico-cross" x="0" y="0"></use>
                            </svg>
                        </button>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>{title}</h3>
                        </div>
                        <div className={styles.modalBody}>
                            {children}
                        </div>
                    </div>
                </div>            
            </>
        </Portal>
    )
}

export default Modal;