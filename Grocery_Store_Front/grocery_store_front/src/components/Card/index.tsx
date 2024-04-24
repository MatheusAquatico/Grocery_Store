import styles from './Card.module.css';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { ProductData } from '../../interfaces/ProductData';

const Card = ({name, price, id, handleSearch } : ProductData & { handleOpenModal: () => void, handleSearch: (id: string) => void }) => {

    const search = () => {
        handleSearch(id);
    }

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{price}</p>
            <div className={styles.card_footer}>
                <button onClick={search} className={styles.card_button}><BsSearch/></button>
                <button className={styles.card_button}><BsPlus/></button>
            </div>
        </section>
    );
};

export default Card;