import React from "react";
import { useGetNewProduct } from "../home/serivces/query/useGetNewProduct";
import { useParams } from "react-router-dom";


export const ProductDetail = () => {
    const { data, isLoading } = useGetNewProduct("phones");
    console.log(data);
    const params = useParams();
    console.log(params);
    const result = data?.find((item) => item.id == params.slug);
    console.log(result);
    return (
        <>
        <h2>{result.title}</h2>
        </>
    )
};