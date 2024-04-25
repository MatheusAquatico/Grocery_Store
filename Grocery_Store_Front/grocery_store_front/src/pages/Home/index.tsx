import Card from '../../components/Card';
import styles from './Home.module.css';
import { ProductData } from '../../interfaces/ProductData';
import { useProductData } from '../../hooks/useProductGetData';
import { Modal } from '../../components/Modal';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const {data: productsData} = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<ProductData | null>(null);

    const showErrorToast = () => {
        toast.error("No promotions found for this product")
    }

    const search = async (id: string) => {
        const productPromotionData = await productPromotionRequest(id);
        if(productPromotionData.data.promotions?.length > 0){
            handleOpenModal(productPromotionData.data);
        }else{
            showErrorToast();
        }
    }     

    const productPromotionRequest = async (id: string) => {
        const productPromotionData = await axios.get("/api/products/" + id);
        return productPromotionData;
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
            <Toaster position="bottom-center" reverseOrder={false}/>
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
            <Modal {...modalData} openCloseModal={openCloseModal} />}
        </section>
    )
}

export default Home;
