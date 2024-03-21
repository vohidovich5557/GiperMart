import React from "react";
import { Like } from "../../../../../assets/home-icon/like";
import { EyeIcon } from "../../../../../assets/home-icon/eye-icon";


export const ProductCard = ({ img, title, price, rame, color }) => {
    return (
        <>
            <div className=" relative w-[214px] h-[323px] pb-[15px]">
                <div className=" w-full h-[165px] mb-[53px]">
                    <img src={img} alt="img" className="w-full h-auto" />
                    <div className=" absolute top-[15px] translate-x-[-118px] md:translate-x-[-37px] lg:translate-x-[-71px]">
                        <Like />
                    </div>
                </div>
                <div className="flex flex-col items-center text-left pl-[4px]">
                    <p className="w-[165px] text-md font-normal text-left h-auto mb-[7px]">{title} <span>{color}</span></p>
                    <div className="flex items-center gap-[6px] text-left">
                        <p className="text-lg font-medium text-black gap-[6px]">{price} Сум</p>
                        <EyeIcon />
                    </div>
                </div>
            </div>
        </>
    )
}