import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";


export const useGetNewDetail = (slug, id) => {
    return useQuery({
        queryKey: ["single-data", id],
        queryFn: () => request.get(`/${slug ? slug : "all"}/${id}`).then((res) => res.data)
    });
};