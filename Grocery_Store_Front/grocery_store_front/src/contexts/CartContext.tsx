import { createContext, useContext, useState } from 'react';
import { ItemData } from '../interfaces/ItemData';
import { ProductData } from '../interfaces/ProductData';

type CartContextProviderProps = {
    children: React.ReactNode;
}

const CartContext = createContext<ItemData>({"qty": 0, "itemId": "0", "itemName": "", "itemPrice": 0});
CartContext.displayName = "Cart";

export const CartContextProvider = ({ children, }: CartContextProviderProps) => {
    const [cart, setCart] = useState<ItemData[]>([]);
    
    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

export function useCartContext() {
    const { cart , setCart } = useContext(CartContext);

    function addToCart({id,name,price,promotions}: ProductData, addItem : boolean = true) {
        
        const repeatedItem = cart.some((item) => item.itemId === id);
        let newList = [...cart];

        if(!repeatedItem && addItem){
            newList.push({qty: 1, itemId: id, itemName: name, itemPrice: price, itemPromotion: promotions?.[0].type});
        }else{
            newList = cart.map((item) => {
                if(item.itemId === id){
                    if(!item.itemPromotion)
                        if(!addItem)
                            return {...item, qty: item.qty - 1, itemPromotion: promotions?.[0].type};
                        else
                            return {...item, qty: item.qty + 1, itemPromotion: promotions?.[0].type};
                    else
                        if(!addItem)
                            return {...item, qty: item.qty - 1};
                        else
                            return {...item, qty: item.qty + 1};
                } else {
                    return item;
                }
            });
        }

        newList = newList.filter((item) =>item.qty > 0);

        return setCart(newList);
    }

    return{
        cart,
        addToCart
    }
}