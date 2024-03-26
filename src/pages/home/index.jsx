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
import Skeleton from "react-loading-skeleton";



export const Home = () => {
    const { data, isLoading } = useGetCatalog();
    const { data: data2, isLoading: isLoading2 } = useGetNewProduct("phones");
    const { data: data5, isLoading: isLoading5 } = useGetNewProduct("notebook");
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
                {isLoading2 ?
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <ProductBanner>
                            {data2?.map((item) => (
                                <div className="flex items-center justify-center">
                                    <ProductCard
                                        slug="phones"
                                        key={item.id}
                                        img={item.img}
                                        title={item.title}
                                        id={item.id}
                                        rame={item.rame}
                                        color={item.color}
                                        price={item.price}
                                    />
                                </div>
                            ))}
                        </ProductBanner>
                    </div>}

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
                <div className="flex flex-col lg:text-left text-center">
                    <h2 className="text-2xl font-normal mb-[14px]">Смартфоны и планшеты</h2>
                    <div className="lg:w-[417px] w-[300px] h-[1px] bg-gray-400 ml-auto mr-auto lg:ml-0 lg:mr-0"></div>
                    {data2?.slice(0, 4).map((item) => (
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <Product1
                                slug="phones"
                                key={item.id}
                                {...item}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:text-left text-center">
                    <h2 className="text-2xl font-normal mb-[14px]">Ноутбуки, планшеты и компьютеры</h2>
                    <div className="lg:w-[417px] w-[300px] h-[1px] bg-gray-400 lg:ml-0 lg:mr-0 mr-auto ml-auto"></div>
                    {data5?.slice(0, 4).map((item) => (
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <Product1
                                slug="notebook"
                                key={item.id}
                                {...item}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:text-left text-center">
                    <h2 className="text-2xl font-normal mb-[14px]">Смартфоны и планшеты</h2>
                    <div className="w-[417px] h-[1px] bg-gray-400 lg:ml-0 lg:mr-0 mr-auto ml-auto"></div>
                    {data2?.slice(0, 4).map((item) => (
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <Product1
                                slug="phones"
                                key={item.id}
                                {...item}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container px-[20px] mt-[64px]">
                <h2 className="text-2xl font-medium mb-[24px]">Смартфоны и планшеты</h2>
                {isLoading2 ?
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                        </div>
                    </div>
                    :
                    <ProductBanner>
                        {data2?.map((item) => (
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    slug="phones"
                                    id={item.id}
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    rame={item.rame}
                                    color={item.color}
                                    price={item.price}
                                />
                            </div>
                        ))}
                    </ProductBanner>
                }

            </div>
            <div className="container px-[20px] mt-[48px]">
                <h2 className="text-2xl font-medium mb-[24px]">Ноутбуки, планшеты и компьютеры</h2>
                {isLoading5 ?
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                            <div>
                                <Skeleton count={1} width={214} height={340} />
                            </div>
                        </div>
                    </div>
                    :
                    <ProductBanner>
                        {data5?.map((item) => (
                            <div className="flex flex-col items-center justify-center">
                                <ProductCard
                                    slug="notebook"
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    id={item.id}
                                />
                            </div>
                        ))}
                    </ProductBanner>
                }

            </div>
            <div className="container mt-[53px]">

            </div>
        </>
    )
};