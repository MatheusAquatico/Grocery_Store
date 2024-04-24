import styles from './Checkout.module.css';

const Checkout = () => {
    return (
        <>
            <section>
                <h2>
                    Cart
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
            <section>
                <h2>Cart totals</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Your Savings</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Checkout;