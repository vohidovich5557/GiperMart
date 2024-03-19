import { QueryClient } from "@tanstack/react-query";


export const queryclinet = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})