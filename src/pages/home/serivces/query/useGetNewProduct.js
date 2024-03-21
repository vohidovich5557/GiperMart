import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";


export const useGetNewProduct = (slug) => {
    return useQuery({
        queryKey: ["phones", slug],
        queryFn: () => request.get(`/${slug}`, { params: { _limit: 8 } }).then((res) => res.data)
    });
};