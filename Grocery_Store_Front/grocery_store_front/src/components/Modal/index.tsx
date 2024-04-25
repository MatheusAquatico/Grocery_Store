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
                <div className={styles.text_container}>
                    <h3>Promotion Type</h3>
                    <p>
                        {
                            promotions?.[0].type === "BUY_X_GET_Y_FREE" ? "Buy X Get Y Free" : 
                            promotions?.[0].type === "QTY_BASED_PRICE_OVERRIDE" ? "Quantity Based Price Override" :
                            promotions?.[0].type === "FLAT_PERCENT" ? "Flat Percent" : "No promotion"
                        }
                    </p>
                    <h3>Description</h3>
                    <p>
                        {
                             promotions?.[0].type === "BUY_X_GET_Y_FREE" ? "Buy 2 items and get 1 free!" : 
                             promotions?.[0].type === "QTY_BASED_PRICE_OVERRIDE" ? "Buy 2 items and pay 1799 for both!" :
                             promotions?.[0].type === "FLAT_PERCENT" ? "Applying this promotion, you get a flat rate of 10% off your total purchase!" : "No promotion"
                        }
                    </p>
                </div>
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
