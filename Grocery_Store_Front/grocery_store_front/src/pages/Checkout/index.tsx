import { FaCentSign } from 'react-icons/fa6';
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
                                    <td><div className={styles.price}>
                                        <FaCentSign size={16}/>
                                        <p>{item.itemPrice}</p>
                                    </div></td>
                                    <td>{item.qty}
                                    </td>
                                    <td>
                                        <div className={styles.price}>
                                            <FaCentSign size={16}/>
                                            <p>{item.itemPrice * item.qty}</p>
                                        </div>
                                    </td>
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
                            <td>
                            <div className={styles.price}>
                                <FaCentSign size={16}/>
                                <p>{subtotal.toFixed(2)}</p>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Your Savings</td>
                            <td>
                            <div className={styles.price}>
                                <FaCentSign size={16}/>
                                <p>{savings.toFixed(2)}</p>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>
                            <div className={styles.price}>
                                <FaCentSign size={16}/>
                                <p>{total.toFixed(2)}</p>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Checkout;