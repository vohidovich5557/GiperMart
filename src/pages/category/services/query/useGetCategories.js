import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";



export const useGetCategories = (slug, dataAttribute) => {
    return useQuery({
        queryKey: ["category", slug, dataAttribute],
        queryFn: () => request.get(`/${slug}`, { params: { ...dataAttribute } }).then((res) => res.data)
    });
};