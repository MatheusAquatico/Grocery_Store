import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Home.module.css';
import { ProductData } from '../../interfaces/ProductData';
import axios from 'axios';

const Home = () => {

    const [ products, setProducts ] = useState([])
    
    useEffect(() => {
        const searchProducts = async () => {
            const response = await axios.get("/api/products");
            setProducts(response.data)
        }
        searchProducts()
    }, [])

    return (
        <section className={styles.cards}>
            <h2>Products</h2>
           {
                products.length > 0 ? (
                    <section className={styles.list}>
                        {
                            products.map((product:ProductData) => {
                                return (
                                    <Card key={product.id} name={product.name} price={product.price}/>
                                )
                            })
                        }
                    </section>
                ): <p>Loading...</p>
           }
        </section>
    )
}

export default Home;