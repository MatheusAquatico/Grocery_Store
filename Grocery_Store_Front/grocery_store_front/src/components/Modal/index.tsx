import { useCartContext } from '../../contexts/CartContext';
import { ProductData } from '../../interfaces/ProductData';
import { PromotionData } from '../../interfaces/PromotionData';
import styles from './Modal.module.css';

interface ModalProps {
    openCloseModal(): void
}

export function Modal({ id, name, price, promotions, openCloseModal } : ProductData & ModalProps){

    const {cart, addToCart} = useCartContext();

    return(
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <h2>Promotion</h2>
                <form className={styles.text_container}>
                    <p>{promotions?.[0].type}</p>
                    <p>{promotions?.[0].id}</p>
                </form>
                <button onClick={openCloseModal} className={styles.btn_close}>
                    X
                </button>
                <button onClick={()=> addToCart({id, name, price, promotions})} className={styles.btn_add_promotion}>
                    Add product and include promotion
                </button>
            </div>
        </div>
    )
}
