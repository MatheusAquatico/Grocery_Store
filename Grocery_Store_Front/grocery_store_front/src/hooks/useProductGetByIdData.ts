import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interfaces/ProductData";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (id : string): AxiosPromise<ProductData> => {
    const response = await axios.get("/api/products/" + id);
    return response;
}

export function useProductPromotionData(id : string) {
    const query = useQuery({
        queryKey: ['dates', id],
        queryFn: () => fetchData(id),
        enabled: false
      });
    return {
        ...query,
        products: query.data?.data
    }
}

