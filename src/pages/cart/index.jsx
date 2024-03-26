import React from "react";
import { useSelector } from "react-redux";
import { CartCard } from "./component/card";


export const Cart = () => {
    const { users } = useSelector((state) => state.todo);
    console.log(users);
    return (
        <>
       {users.length > 0 ? 
       <div className="container md:flex md:items-start pt-[50px]">
            <div className="grid grid-cols-1 pl-[20px] ml-auto mr-auto">
            <h2 className="text-md text-2xl  font-medium text-left">Корзина</h2>
            {users?.map((item) => (
                <CartCard 
                key={item.id}
                {...item}
                />
            ))}
            </div>
            <div className="w-[375px] lg:w-[330px] h-[201px] lg:h-[209px] pt-[8px] mt-[40px] flex flex-col text-left bg-gray-100 ml-auto mr-auto">
                <h3 className="text-md font-medium mb-[8px] pl-[16px]">В корзине </h3>
                <div className="flex items-center gap-[11px] mb-[8px] pl-[16px]">
                    <p className="text-sm font-normal">Товаров:</p>
                    <span>{users.length}</span>
                </div>
                <p className="text-sm font-normal text-red-500 mb-[12px] pl-[16px] ">Введите промокод</p>
                <h3 className="text-lg font-medium mb-[20px] pl-[16px]">156 211.00 Сум</h3>
                <button className="w-full h-[56px] flex items-center justify-center bg-primary text-black">Оформить заказ</button>
            </div>
       </div>
       : ""
       }
        </>
    )
};