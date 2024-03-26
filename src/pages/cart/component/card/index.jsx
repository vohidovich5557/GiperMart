import React from "react";
import { LikeGray } from "../../../../assets/cart-icon/like-gray";
import { TrashIcon } from "../../../../assets/cart-icon/trash-icon";
import { deletData, toggle } from "../../../../redux/reducer/todoStore";
import { useDispatch } from "react-redux";


export const CartCard = ({ img, title, id, userCount, userPrice }) => {
    const dispatch = useDispatch();
    const deletItem = () => {
        dispatch(deletData({ id }))
    }
    return (
        <>
            <div className="w-[343px] lg:w-[990px] mb-[30px] h-[171px] lg:h-[226px] pt-[5px] pl-[5px] lg:pl-[31px] flex items-start lg:items-center  ml-auto mr-auto gap-[16px]">
                <div className="w-[90px] lg:w-[200px] lg:h-[200px] h-[90px] flex items-center justify-center">
                    <img src={img} alt="img" className="h-auto lg:h-[200px]" />
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row items-start text-left mb-[32px] lg:mb-[49px]">
                        <div className="w-[201px] lg:w-[553px] h-auto text-left mb-[12px]">
                            <h3 className="text-sm font-medium lg:text-2xl">{title}</h3>
                        </div>
                        <div className="flex flex-col  text-left">
                            <p className="text-sm lg:text-2xl font-medium mb-[12px]">{`${userPrice}Сум`}</p>
                            <div className="flex items-center">
                                <div onClick={() => dispatch(toggle({ type: "increament", id }))} className="w-[28px] lg:w-[36px] lg:h-[36px] flex items-center justify-center h-[28px] border-2 border-gray-300">
                                    <span>+</span>
                                </div>
                                <div className="w-[44px] lg:w-[56px] lg:h-[36px] flex items-center justify-center h-[28px] bg-gray-300">
                                    <span>{userCount}</span>
                                </div>
                                {userCount <= 1 ? <div  className="w-[28px] cursor-pointer lg:w-[36px] lg:h-[36px] flex items-center justify-center h-[28px] border-2 border-gray-300">
                                    <span>-</span>
                                </div> : <div onClick={() => dispatch(toggle({ type: "decreament", id }))}  className="w-[28px] lg:w-[36px] lg:h-[36px] flex items-center justify-center h-[28px] border-2 border-gray-300">
                                    <span>-</span>
                                </div>  }

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[48px] lg:translate-y-[-60px]">
                        <div className="flex items-center gap-[8px]">
                            <div className="w-[16px] h-[16px]">
                                <LikeGray />
                            </div>
                            <div className="w-[68px] lg:w-[91px] h-[16px]">
                                <p className="text-sm lg:text-md font-normal text-gray-300 whitespace-nowrap">В избранное</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className="w-[16px] h-[16px]">
                                <TrashIcon />
                            </div>
                            <div className="w-[68px] lg:w-[91px] h-[16px]">
                                <button onClick={deletItem} className="text-sm lg:text-md font-normal text-gray-300 whitespace-nowrap">Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-[990px] h-[1px] bg-gray-200 mt-[25px] mb-[25px]">
            </div>
        </>
    )
};