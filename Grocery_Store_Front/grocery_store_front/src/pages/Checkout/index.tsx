import { useCartContext } from '../../contexts/CartContext';
import styles from './Checkout.module.css';

const Checkout = () => {
    const { cart } = useCartContext();
    const subtotal = cart.reduce((acc, item) => acc + item.itemPrice * item.qty, 0);
    let savings = 0;
    const separatingProdctsByPromotions = cart.map((item)=>{
        if(item.itemPromotion){
            if(item.itemPromotion === "BUY_X_GET_Y_FREE"){
                if(item.qty >= 2){
                    savings += item.itemPrice;
                }
            }else if(item.itemPromotion === "QTY_BASED_PRICE_OVERRIDE"){
                if(item.qty >= 2){
                    savings += 399;
                }
            }else if(item.itemPromotion === "FLAT_PERCENT"){
                let discount = item.itemPrice * item.qty * 0.1;
                savings += discount;
                console.log(discount)
                console.log("entrou")
            }
        }
    });
    const total = subtotal - savings;
    return (
        <div className={styles.box}>
            <section>
                <h2 className={styles.title_box}>
                    Cart
                </h2>
                <div className={styles.cart}>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.itemId}>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.itemPrice * item.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2 className={styles.title_box}>Cart totals</h2>
                <table className={styles.cart_totals}>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>{subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Your Savings</td>
                            <td>{savings.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Checkout;