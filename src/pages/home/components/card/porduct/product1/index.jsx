import React from "react";
import { Link } from "react-router-dom";


export const Product1 = ({ img, title, color, price, ram, slug, id }) => {
    return (
        <>
            <div className="flex items-start justify-start pt-[8px] pl-[4px] pb-[9px]">
                <div className="w-[140px] h-[140px] hover:w-[150px] hover:h-[150px] hover:transition-all flex items-start">
                    <img src={img} alt="img" />
                </div>
                <div className="flex flex-col text-left">
                    <Link to={`/detail/${slug}/${id}`}>
                        <h3 className="w-[249px] text-left mb-[40px]">{title.length > 15 ? title.slice(0, 20) + "..." : title}<span>{color}</span><span>{ram}</span></h3>
                    </Link>
                    <div className="flex items-center gap-[8px]">
                        <p className="text-lg font-medium">{price}Сум</p>
                        <p className="text-gray-400">26 190 000 Сум</p>
                    </div>
                </div>
            </div>


        </>
    )
};