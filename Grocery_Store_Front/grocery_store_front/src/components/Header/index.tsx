import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { BiHome } from 'react-icons/bi';

const Header = () => {
    return (
        <header className={styles.header}>
            <span>
                My Grocery Store
            </span>
            <nav>
                <Link to={'/'}><BiHome /></Link>
                <Link to={'checkout'}><FaShoppingCart /></Link>
            </nav>
        </header>
    )
}

export default Header;