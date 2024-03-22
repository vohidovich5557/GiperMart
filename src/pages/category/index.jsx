import React from "react";
import { useGetCategories } from "./services/query/useGetCategories";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../home/components/card/product-card";



export const Category = () => {
    const { slug } = useParams();
    const { data, isLoading } = useGetCategories(slug);
    return (
        <>
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 ml-auto mr-auto grid-cols-1 gap-3">
                    {data?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    key={item.id}
                                    {...item}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
};