import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { BiHome } from 'react-icons/bi';
import { useCartContext } from '../../contexts/CartContext';


const Header = () => {
    let qtd = 0;
    const { cart } = useCartContext();
    cart.map((item) => {
        qtd += item.qty;
    });
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <Link to={'/'}>My Grocery Store</Link>
            </span>
            <nav>
                <Link className={styles.margin} to={'/'}><BiHome /></Link>
                <div className={styles.box}>
                    <Link to={'checkout'}><FaShoppingCart /><div className={styles.qtd}><p>{qtd}</p></div></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;