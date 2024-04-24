import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interfaces/ProductData";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): AxiosPromise<ProductData[]> => {
    const response = await axios.get("/api/products");
    return response;
}

export function useProductData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry:2
    })
    return {
        ...query,
        products: query.data?.data
    }
}