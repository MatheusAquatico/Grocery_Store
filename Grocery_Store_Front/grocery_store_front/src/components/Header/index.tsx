import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <span>
                My Grocery Store
            </span>
            <nav>
                <a href="">Home</a>
                <a href="">Home</a>
            </nav>
        </header>
    )
}

export default Header;