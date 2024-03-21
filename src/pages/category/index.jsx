import React from "react";
import { useGetCategories } from "./services/query/useGetCategories";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/card/productCard";


export const Category = () => {
    const { slug } = useParams();
    const { data, isLoading } = useGetCategories(slug);
    return (
        <>
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
                    {data?.map((item) => (
                        <ProductCard 
                        key={item.id}
                        {...item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};