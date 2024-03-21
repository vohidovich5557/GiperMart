import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";


export const useSearchAll = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () => request.get("/all", {params: {title_like: value}}).then((res) => res.data)
  });
};

