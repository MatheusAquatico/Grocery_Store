import { ProductData } from "./ProductData";

export interface ItemData {
    qty: number,
    itemId: string,
    itemName: string,
    itemPrice: number,
    itemPromotion?: string,
}