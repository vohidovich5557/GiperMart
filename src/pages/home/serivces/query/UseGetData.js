import { useQuery } from "@tanstack/react-query";
import {request} from "../../../../config/request";


export const useGetData = () => {
    return useQuery({
        queryKey: ["getData"],
        queryFn: () => request.get("/catalog").then((res) => res.data)
    });
};