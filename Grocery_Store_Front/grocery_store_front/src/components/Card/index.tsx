import { FaHtml5 } from 'react-icons/fa';
import styles from './Card.module.css';
import { BsArrowRight } from 'react-icons/bs';

const Card = ({name, price}) => {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{price}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                   <FaHtml5/>
                   <FaHtml5/>
                   <FaHtml5/>
                   <FaHtml5/>
                </div>
                <button className={styles.card_button}><BsArrowRight/></button>
            </div>
        </section>
    );
};

export default Card;