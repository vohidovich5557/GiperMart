import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";


export const useGetNew2 = (slug) => {
    return useQuery({
        queryKey: ["phones2", slug],
        queryFn: () => request.get(`/${slug}`, { params: { _limit: 4 } }).then((res) => res.data)
    });
};