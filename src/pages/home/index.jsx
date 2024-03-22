import React from "react";
import { Banner } from "./components/slider/slider-banner";
import { useGetCatalog } from "../../layout/header/services/query/useGetCategory";
import { CatalogCard } from "../../layout/header/components/card/catalogCard";
import { Link } from "react-router-dom";
import aksiya1 from "../../assets/aksiya1.png";
import aksiya2 from "../../assets/aksiya2.png";
import aksiya3 from "../../assets/aksiya3.png";
import { ProductCard } from "./components/card/product-card";
import { ProductBanner } from "./components/slider/product-banner";
import { useGetNewProduct } from "./serivces/query/useGetNewProduct";
import { useGetNew2 } from "./serivces/query/useGetNew2";
import { Product1 } from "./components/card/porduct/product1";



export const Home = () => {
    const { data, isLoading } = useGetCatalog();
    const { data: data2, isLoading: isLoading2 } = useGetNewProduct("phones");
    const { data: data5, isLoading: isLoading5 } = useGetNewProduct("notebook");
    const { data: data3, isLoading: isLoading3 } = useGetNew2("phones");
    const { data: data4, isLoading: isLoading4 } = useGetNew2("notebook");
    return (
        <>
            <Banner />
            <div className="container mt-[36px] mb-[48px] grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 ml-auto mr-auto gap-[60px] overflow-x-scroll">
                {data?.map((item) => (
                    <Link to={`/category/${item.name}`}>
                        <CatalogCard
                            key={item.id}
                            {...item}
                        />
                    </Link>
                ))}
            </div>
            <div className="container px-[20px]">
                <h2 className="text-2xl font-medium mb-[24px]">Смартфоны и планшеты</h2>
                <ProductBanner>
                    {data2?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    rame={item.rame}
                                    color={item.color}
                                    price={item.price}
                                />
                            </div>
                        </Link>
                    ))}
                </ProductBanner>
            </div>
            <div className="w-full bg-yellow h-[850px] lg:h-[346px]">
                <div className="container flex flex-col text-left pt-[16px] pl-0 lg:pl-[40px] mt-[48px] mb-[48px]">
                    <h2 className="text-2xl font-medium mb-[24px]">Акции</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[20px] ml-auto mr-auto ">
                        <div className="w-[346px] lg:w-[430px] h-[240px] mb-[20px] lg:mb-0">
                            <img src={aksiya1} alt="img" className="w-full h-[240px]" />
                        </div>
                        <div className="w-[346px] lg:w-[430px] h-[240px]  mb-[20px] lg:mb-0">
                            <img src={aksiya2} alt="img" className="w-full h-[240px]" />
                        </div>
                        <div className="w-[346px] lg:w-[430px] h-[240px] mb-[20px] lg:mb-0">
                            <img src={aksiya3} alt="img" className="w-full h-[240px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-1 lg:grid-cols-3 mt-[60px] px-[40px]">
                <div className="flex flex-col text-left">
                    <h2 className="text-2xl font-normal mb-[14px]">Смартфоны и планшеты</h2>
                    <div className="lg:w-[417px] w-[300px] h-[1px] bg-gray-400"></div>
                    {data3?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <Product1
                                key={item.id}
                                {...item}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col text-left">
                    <h2 className="text-2xl font-normal mb-[14px]">Ноутбуки, планшеты и компьютеры</h2>
                    <div className="lg:w-[417px] w-[300px] h-[1px] bg-gray-400"></div>
                    {data4?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <Product1
                                key={item.id}
                                {...item}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col text-left">
                    <h2 className="text-2xl font-normal mb-[14px]">Смартфоны и планшеты</h2>
                    <div className="w-[417px] h-[1px] bg-gray-400"></div>
                    {data3?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <Product1
                                key={item.id}
                                {...item}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="container px-[20px] mt-[64px]">
                <h2 className="text-2xl font-medium mb-[24px]">Смартфоны и планшеты</h2>
                <ProductBanner>
                    {data2?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    rame={item.rame}
                                    color={item.color}
                                    price={item.price}
                                />
                            </div>
                        </Link>
                    ))}
                </ProductBanner>
            </div>
            <div className="container px-[20px] mt-[48px]">
                <h2 className="text-2xl font-medium mb-[24px]">Ноутбуки, планшеты и компьютеры</h2>
                <ProductBanner>
                    {data5?.map((item) => (
                        <Link to={`/detail/${item.id}`}>
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                />
                            </div>
                        </Link>
                    ))}
                </ProductBanner>
            </div>
            <div className="container mt-[53px]">

            </div>
        </>
    )
};