import React, { useDebugValue } from "react";
import { useGetCategories } from "./services/query/useGetCategories";
import { Link, useParams } from "react-router-dom";
import { useGetAttribute } from "./services/query/useGetAttribute";
import { ProductCard } from "../home/components/card/product-card";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/reducer/filter-slice";
import Skeleton from "react-loading-skeleton";

const GetAttribute = ({ result }) => {
    const dispatch = useDispatch();
    const changeInput = (e) => {
        
        dispatch(addFilter({ name: e.target.name, value: e.target.value }));
        console.log(e.target.name, e.target.value);
    };
    let arr = [];
    for (let i in result) {
        if (i !== "id" && i !== "slug") {
            arr.push(<div className="pt-[5px] pl-[20px]">
                <div key={i}>
                    <h2 className="text-md font-medium text-left mb-[15px]">{i}</h2>
                    <div className="flex flex-col" key={i}>
                        {result[i].map((item) => (
                            <div key={item} className="flex items-center gap-[16px]">
                                <input onChange={changeInput} type="radio" value={item} name={`${i}_like`}  />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>);
        }
    };
    return arr;
}

export const Category = () => {
    const { slug } = useParams();
    const { dataAttribute } = useSelector((state) => state.filter);
    const { data, isLoading } = useGetCategories(slug, dataAttribute);
    const { data: data2 } = useGetAttribute();
    const result = data2?.find((item) => item.slug == slug);
    console.log(dataAttribute);


    return (
        <>
            <div className={`container ${result ? "flex justify-between " : ""} pr-[10px]`}>
                
                {isLoading ? 
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-auto mr-auto">
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                    <div className="w-[214px] h-[340px]">
                        <Skeleton count={1} width={214} height={340} />
                    </div>
                </div>
                :
                <div className="grid lg:grid-cols-4 md:grid-cols-3 ml-auto mr-auto grid-cols-1 gap-6">
                    {data?.map((item) => (
                        <div className="flex flex-col items-center justify-center">
                            <ProductCard
                                slug={slug}
                                key={item.id}
                                {...item}
                            />
                        </div>
                    ))}
                </div> 
                }
               {result ?  <div className="w-[328px] hidden lg:flex border-2 h-[500px]">
                    {result && <div>
                        <GetAttribute result={result} />
                    </div>}
                </div> : ""}
            </div>
        </>
    )
};