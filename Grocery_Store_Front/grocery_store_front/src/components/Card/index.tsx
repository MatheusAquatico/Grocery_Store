import styles from './Card.module.css';
import { BsPlus, BsSearch, BsSubtract } from 'react-icons/bs';
import { ProductData } from '../../interfaces/ProductData';
import { useCartContext } from '../../contexts/CartContext';
import { BiMinus } from 'react-icons/bi';

const Card = ({name, price, id, promotions, handleSearch } : ProductData & { handleOpenModal: () => void, handleSearch: (id: string) => void }) => {

    const {cart, addToCart} = useCartContext();

    const search = () => {
        handleSearch(id);
    }

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.offer}>
                <div>
                    <picture className={styles.image}>
                        <source srcSet="https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg" media="(max-width: 768px)"/>
                        <img src="https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg" alt="Product"/>
                    </picture>
                </div>
                <div>
                    <p>Price</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className={styles.card_footer}>
                <div className={styles.card_button_search}>
                    <button onClick={search} className={styles.card_button}><BsSearch/></button>
                </div>
                <div className={styles.card_button_qtd_position}>
                    <button onClick={()=> addToCart({id, name, price, promotions}, false)}
                    className={styles.card_button}><BiMinus/></button>
                    <button onClick={()=> addToCart({id, name, price, promotions})}
                    className={styles.card_button}><BsPlus/></button>
                </div>
            </div>
        </section>
    );
};

export default Card;