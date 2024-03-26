import React from "react";
import { Like } from "../../../../../assets/home-icon/like";
import { EyeIcon } from "../../../../../assets/home-icon/eye-icon";
import { Link } from "react-router-dom";


export const ProductCard = ({ img, title, price, rame, color, id, slug, attribute }) => {
    return (
        <>
            <div className=" relative w-[214px] h-[340px] pb-[15px]">
                <div className=" w-full h-[165px] mb-[53px]">
                    <img src={img} alt="img" className="w-full h-auto" />
                    <div className=" absolute top-[15px] translate-x-[200px] md:translate-x-[-37px] lg:translate-x-[212px]">
                        <Like />
                    </div>
                </div>
                <div className="flex flex-col items-center text-left pl-[4px]">
                    <Link to={`/detail/${slug}/${id}`}>
                        <p className="w-[165px] text-md font-normal text-left h-auto mb-[7px]">{title.length > 20 ? title.slice(0, 20) : title} <span>{color}</span></p>
                    </Link>
                    <p className="text-center text-blue-600">{attribute}</p>
                    <div className="flex items-center gap-[6px] text-left">
                        <p className="text-lg font-medium text-black gap-[6px]">{price} Сум</p>
                        <EyeIcon />
                    </div>
                </div>
            </div>
        </>
    )
}