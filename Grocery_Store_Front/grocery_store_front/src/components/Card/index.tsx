import styles from './Card.module.css';
import { BsPlus, BsSearch, BsSubtract } from 'react-icons/bs';
import { ProductData } from '../../interfaces/ProductData';
import { useCartContext } from '../../contexts/CartContext';
import { BiDollar, BiMinus } from 'react-icons/bi';
import { FaCentSign } from 'react-icons/fa6';

const Card = ({name, price, id, promotions, handleSearch } : ProductData & { handleOpenModal: () => void, handleSearch: (id: string) => void }) => {

    const {cart, addToCart} = useCartContext();

    const search = () => {
        handleSearch(id);
    }
    const image = name.match("Amazing Pizza!") ? "pizza" : name.match("Amazing Burger!") ? "burger" : name.match("Amazing Salad!") ? "salad" : name.match("Boring Fries!") ? "fries" : "default";

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.offer}>
                <div>
                    <picture className={styles.image}>
                        <source srcSet={`src/assets/images/${image}_small.jpg`} media="(max-width: 768px)"/>
                        <img src={`src/assets/images/${image}_original.jpg`} alt="Product"/>
                    </picture>
                </div>
                <div>
                    <p>Price</p>
                    <div className={styles.price}>
                    <FaCentSign color='#ab4c00'/>
                    <p>{price}</p>
                    </div>
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