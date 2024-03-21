import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";



export const useGetCategories = (slug) => {
    return useQuery({
        queryKey: ["category", slug],
        queryFn: () => request.get(`/${slug}`).then((res) => res.data)
    });
};