import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Star } from "../../assets/star";
import { useGetNewDetail } from "./service/query/useGetnewDetail";
import { addData } from "../../redux/reducer/todoStore";
import { Like } from "../../assets/like";
import { TopIcon } from "../../assets/topicon";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";

export const ProductDetail = () => {
    const { slug, id } = useParams();
    const { data, isLoading } = useGetNewDetail(slug, id);
    console.log(data);
    console.log(slug, id);
    const dispatch = useDispatch();
    const [clicked, setClicked] = React.useState(false);
    const DivElement = useRef(null);



    useEffect(() => {
        const myElement = DivElement.current;
        if (myElement) {
            if (clicked) {
                myElement.style.display = "flex";
                myElement.style.transition = "1s";
            } else {
                myElement.style.display = "none";
            }
        }
    }, [clicked])

    const handleClick = () => {
        setClicked(!clicked)
    };
    const AddData = () => {
        console.log("salom");
        dispatch(addData(data));
    };
    return (
        <>
            <div className="container  flex  flex-col items-center md:items-start md:justify-start justify-center mt-[8px] pl-[10px]">
                <div>
                    {isLoading ? 
                    <div>
                        <div>
                            <Skeleton count={1} width={600} height={36} />
                        </div>
                    </div>
                    :
                    <h2 className="w-[341px] text-left lg:text-2xl lg:w-[646px] text-sm font-medium mb-[8px]">{data?.title}<span>{data?.color}</span><span>{data?.rame}</span></h2>
                    }
                    <div className="flex items-center gap-[111px] mb-[29px]">
                        <div className="flex items-center gap-[5px]">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <p className="text-green-500">(0)</p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <Like />
                            <p className="text-gray-400 text-sm font-normal">В избранное</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] md:items-start md:flex-row">
                    <div className="w-[343px] lg:w-[435px] lg:h-[435px] h-[342px] mb-[24px]">
                        {isLoading ? 
                        <div>
                            <div>
                                <Skeleton  count={1} width={435} height={435} />
                            </div>
                        </div>
                        :
                        <img src={data?.img} alt="img" className=" h-full" />
                        }
                        
                    </div>
                    <div className="flex flex-col md:flex-row lg:gap-[250px] md:gap-[30px]  text-left">
                        <div className="hidden lg:flex flex-col">
                            {data?.rame ? <div className="flex flex-col">
                                <p className="text-sm font-medium mb-[12px]">Объем памяти</p>
                                <div className="w-[76px] h-[33px] border border-red-500 pt-[8px] pb-[9px] flex items-center justify-center mb-[29px]">
                                    <p className="text-sm">{data?.rame}</p>
                                </div>
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Цвет</p>
                                            <p className="text-md font-normal">{data?.color}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">экран</p>
                                            <p className="text-md font-normal">6.2"/2400x1080 Пикс</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">оперативная память</p>
                                            <p className="text-md font-normal">{data?.rame}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            {data?.ram ? <div className="flex flex-col">
                                <p className="text-sm font-medium mb-[12px]">Объем памяти</p>
                                <div className="w-[76px] h-[33px] border border-red-500 pt-[8px] pb-[9px] flex items-center justify-center mb-[29px]">
                                    <p className="text-sm">{data?.ram}</p>
                                </div>
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Цвет</p>
                                            <p className="text-md font-normal">{data?.color}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">экран</p>
                                            <p className="text-md font-normal">{data?.display}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">оперативная память</p>
                                            <p className="text-md font-normal">{data?.memory}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            {data?.details ? <div className="flex flex-col">
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Display</p>
                                            <p className="text-md font-normal">{data?.details.display}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Frequency</p>
                                            <p className="text-md font-normal">{data?.details.frequency}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">weight</p>
                                            <p className="text-md font-normal">{data?.details.weight}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">diagonal</p>
                                            <p className="text-md font-normal">{data?.details.diagonal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            <div className="flex flex-col mb-[16px]">
                                <p className="text-gray-300 mb-[4px]">Brand</p>
                                <p className="text-md font-normal">{data?.brand}</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-left mb-[29px] md:w-[343px] md:h-[167px] md:pt-[12px] md:pb-[17px] md:pl-[16px] md:pr-[18px] md:border">
                            <div className="flex items-center gap-[8px] mb-[2px]">
                                <p className="text-gray-500 lg:text-2xl">7 990 000 Сум</p>
                                <div className="w-[29px] h-[20px] bg-red-600 items-center justify-center">
                                    <p className="text-white text-sm font-normal">-9%</p>
                                </div>
                            </div>
                            <h3 className="text-2xl lg:text-4xl font-medium">{data?.price}Сум</h3>
                            <button onClick={AddData} className="w-[343px] md:w-[306px] md:h-[40px] mb-[56px] bg-primary py-[16px] px-[136px] flex items-center justify-center text-black font-normal whitespace-nowrap">В корзину</button>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col lg:hidden">
                    <div onClick={handleClick} className="flex items-center gap-[129px]">
                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                        <div>
                            <TopIcon />
                        </div>
                    </div>
                    <div ref={DivElement} className=" hidden flex-col text-left">
                        <div className="flex flex-col">
                            {data?.rame ? <div className="flex flex-col">
                                <p className="text-sm font-medium mb-[12px]">Объем памяти</p>
                                <div className="w-[76px] h-[33px] border border-red-500 pt-[8px] pb-[9px] flex items-center justify-center mb-[29px]">
                                    <p className="text-sm">{data?.rame}</p>
                                </div>
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Цвет</p>
                                            <p className="text-md font-normal">{data?.color}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">экран</p>
                                            <p className="text-md font-normal">6.2"/2400x1080 Пикс</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">оперативная память</p>
                                            <p className="text-md font-normal">{data?.rame}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            {data?.ram ? <div className="flex flex-col">
                                <p className="text-sm font-medium mb-[12px]">Объем памяти</p>
                                <div className="w-[76px] h-[33px] border border-red-500 pt-[8px] pb-[9px] flex items-center justify-center mb-[29px]">
                                    <p className="text-sm">{data?.ram}</p>
                                </div>
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Цвет</p>
                                            <p className="text-md font-normal">{data?.color}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">экран</p>
                                            <p className="text-md font-normal">{data?.display}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">оперативная память</p>
                                            <p className="text-md font-normal">{data?.memory}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            {data?.details ? <div className="flex flex-col">
                                <div className="hidden lg:flex flex-col">
                                    <div className="flex items-center gap-[129px]">
                                        <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                                        <div>
                                            <TopIcon />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col text-left">
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Display</p>
                                            <p className="text-md font-normal">{data?.details.display}</p>
                                        </div>
                                        <div className="flex flex-col mb-[16px]">
                                            <p className="text-gray-300 mb-[4px]">Frequency</p>
                                            <p className="text-md font-normal">{data?.details.frequency}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">weight</p>
                                            <p className="text-md font-normal">{data?.details.weight}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-gray-300 mb-[4px]">diagonal</p>
                                            <p className="text-md font-normal">{data?.details.diagonal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                            <div className="flex flex-col mb-[16px]">
                                <p className="text-gray-300 mb-[4px]">Brand</p>
                                <p className="text-md font-normal">{data?.brand}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};