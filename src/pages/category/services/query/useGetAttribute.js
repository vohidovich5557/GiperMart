import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";




export const useGetAttribute = () => {
    return useQuery({
        queryKey: ["attribute-data"],
        queryFn: () => request.get("/category_attribute").then((res) => res.data)
    });
};