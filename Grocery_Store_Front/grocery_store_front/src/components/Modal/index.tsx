import { PromotionData } from '../../interfaces/PromotionData';
import styles from './Modal.module.css';

interface ModalProps {
    openCloseModal(): void
}

export function Modal({ id, type, openCloseModal } : PromotionData & ModalProps){

    return(
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <h2>Promotion</h2>
                <form className={styles.input_container}>
                    <p>{type}</p>
                    <p>{id}</p>
                </form>
                <button onClick={openCloseModal} className={styles.btn_secondary}>
                    Close
                </button>
            </div>
        </div>
    )
}
