import React, { useEffect, useRef } from "react";
import { useGetNewProduct } from "../home/serivces/query/useGetNewProduct";
import { useParams } from "react-router-dom";
import { Star } from "../../assets/star";
import { addData } from "../../redux/reducer/todoStore";
import { Like } from "../../assets/like";
import { TopIcon } from "../../assets/topicon";
import { useDispatch } from "react-redux";

export const ProductDetail = () => {
    const dispatch = useDispatch();
    const [clicked, setClicked] = React.useState(false);
    const DivElement = useRef(null);
    const { data, isLoading } = useGetNewProduct("phones");
    const params = useParams();
    const result = data?.find((item) => item.id == params.slug);
    console.log(result);

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
        dispatch(addData(result));
    };
    return (
        <>
            <div className="container  flex  flex-col items-center md:items-start md:justify-start justify-center mt-[8px] pl-[10px]">
                <div>
                    <h2 className="w-[341px] text-left lg:text-2xl lg:w-[646px] text-sm font-medium mb-[8px]">{result.title}<span>{result.color}</span><span>{result.rame}</span></h2>
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
                <div className="flex flex-col md:flex-row">
                    <div className="w-[343px] lg:w-[435px] lg:h-[435px] h-[342px] mb-[24px]">
                        <img src={result.img} alt="img" className=" h-full" />
                    </div>
                    <div className="flex flex-col md:flex-row lg:gap-[500px] md:gap-[30px]  text-left">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium mb-[12px]">Объем памяти</p>
                            <div className="w-[76px] h-[33px] border border-red-500 pt-[8px] pb-[9px] flex items-center justify-center mb-[29px]">
                                <p className="text-sm">{result.rame}</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-left mb-[29px] md:w-[343px] md:h-[167px] md:pt-[12px] md:pb-[17px] md:pl-[16px] md:pr-[18px] md:border">
                            <div className="flex items-center gap-[8px] mb-[2px]">
                                <p className="text-gray-500 lg:text-2xl">7 990 000 Сум</p>
                                <div className="w-[29px] h-[20px] bg-red-600 items-center justify-center">
                                    <p className="text-white text-sm font-normal">-9%</p>
                                </div>
                            </div>
                            <h3 className="text-2xl lg:text-4xl font-medium">{result.price}Сум</h3>
                            <button onClick={AddData} className="w-[343px] md:w-[306px] md:h-[40px] mb-[56px] bg-primary py-[16px] px-[136px] flex items-center justify-center text-black font-normal whitespace-nowrap">В корзину</button>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col">
                <div onClick={handleClick} className="flex items-center gap-[129px]">
                    <h3 className="text-md font-medium w-[190px] text-left">Характеристики</h3>
                    <div>
                        <TopIcon />
                    </div>
                </div>
                <div ref={DivElement} className=" hidden flex-col text-left">
                    <div className="flex flex-col mb-[16px]">
                        <p className="text-gray-300 mb-[4px]">Цвет</p>
                        <p className="text-md font-normal">{result.color}</p>
                    </div>
                    <div className="flex flex-col mb-[16px]">
                        <p className="text-gray-300 mb-[4px]">экран</p>
                        <p className="text-md font-normal">6.2"/2400x1080 Пикс</p>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-gray-300 mb-[4px]">оперативная память</p>
                        <p className="text-md font-normal">{result.rame}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};