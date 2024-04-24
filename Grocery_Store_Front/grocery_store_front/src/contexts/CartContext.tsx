import { createContext, useContext, useState } from 'react';
import { ItemData } from '../interfaces/ItemData';
import { ProductData } from '../interfaces/ProductData';

type CartContextProviderProps = {
    children: React.ReactNode;
}

const CartContext = createContext<ItemData>({"qty": 0, "item": {"id": "0", "name": "", "price": 0}});
CartContext.displayName = "Cart";

export const CartContextProvider = ({ children, }: CartContextProviderProps) => {
    const [cart, setCart] = useState<ItemData[]>([]);
    
    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

export function useCartContext() {
    const { cart , setCart } = useContext(CartContext);

    function addToCart(product: ProductData) {
        
        const repeatedItem = cart.some((item) => item.item.id === product.id);

        let newList = [...cart];

        if(!repeatedItem){
            newList.push({qty: 1, item: product});
        }else{
            newList = cart.map((item) => {
                if(item.item.id === product.id){
                    return {qty: item.qty + 1, item: item.item}
                }
            });
        }
    }
}