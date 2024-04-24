import Card from '../../components/Card';
import styles from './Home.module.css';
import { ProductData } from '../../interfaces/ProductData';
import { useProductData } from '../../hooks/useProductGetData';
import { Modal } from '../../components/Modal';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const {data: productsData} = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<ProductData | null>(null);

    const search = async (id: string) => {
        const productPromotionData = await axios.get("/api/products/" + id);
        if(productPromotionData.data.promotions?.length > 0){
            handleOpenModal(productPromotionData.data);
        }
    }    

    const handleOpenModal = (data: ProductData) => {
        setModalData(data);
        openCloseModal();
    }

    const openCloseModal = () => {
        setIsModalOpen(prev => !prev);
    }
    
    return (
        <section className={styles.cards}>
            <h2>Products</h2>
           {
                productsData && productsData.data.length > 0 ? (
                    <section className={styles.list}>
                        {
                            productsData?.data.map((product:ProductData) => {
                                return (
                                    <Card key={product.id} name={product.name} price={product.price}
                                    id = {product.id} handleOpenModal={() => handleOpenModal(product)} handleSearch={search}/>
                                )
                            })
                        }
                    </section>
                ): <p>Loading...</p>
           }
             {isModalOpen && modalData?.promotions && 
            <Modal {...modalData.promotions[0]} openCloseModal={openCloseModal} />}
        </section>
    )
}

export default Home;