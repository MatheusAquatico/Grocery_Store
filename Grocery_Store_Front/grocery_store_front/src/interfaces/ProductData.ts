import { PromotionData } from "./PromotionData";

export interface ProductData {
    id: string,
    name: string,
    price: number,
    promotions?: PromotionData[]
}