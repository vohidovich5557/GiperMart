import React from "react";



export const CatalogCard = ({img, text, id}) => {
    return (
        <>
        <div className="w-[241px] flex flex-col items-center  h-[236px">
            <div className="flex  bg-modalGray items-center  py-[14px] px-[16px] justify-center gap-[16px]">
            <img src={img} alt="img" className="w-[96px] h-[96px]" />
            <h2 className="w-[97px] text-center text-md font-semibold">{text}</h2>
        </div>
        <div className="flex flex-col items-start">
            <h2 className="text-md font-semibold">Планшеты</h2>
            <h2 className="text-md font-semibold">Электронные книги</h2>
            <h2 className="text-md font-semibold">Аксессуары для планшетов</h2>
            <h2 className="text-md font-semibold text-red-600">Показать все</h2>
        </div>
            </div>
        </>
    )
};