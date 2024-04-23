import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './Page404.module.css';

const Page404 = () => {
    return (
        <>
            <h2 className={styles.title2}>Something went wrong!</h2>
            <div className={styles.text}>
                <span className={styles.bigger_text}>404</span>
                <strong className={styles.red_text}>Page not found!</strong>
            </div>
        </>
    )
}

export default Page404;