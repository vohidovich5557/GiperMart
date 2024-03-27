import React from "react";
import logo from "../../assets/logo.svg";
import { Facebook } from "../../assets/footer-icon/facebook";
import { Odin } from "../../assets/footer-icon/odin";
import { Wko } from "../../assets/footer-icon/wko";
import { YouTube } from "../../assets/footer-icon/youtube";
import { DownIcon } from "../../assets/footer-icon/down-icon";



export const Footer = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center h-auto bg-gray-200 mt-[18px]">
                <div className="container lg:gap-[187px] md:flex items-start mt-[40px] ml-auto mr-auto pl-[24px] pr-[28px]">
                    <div className="flex flex-col">
                        <div className="w-[190px] mb-[15px] h-[72px] flex items-center justify-center">
                            <img src={logo} alt="img" className="w-[128px] h-[72px]" />
                        </div>
                        <div className="flex flex-col text-left mb-[16px]">
                            <p className="text-sm font-medium mb-[8px]">+99 893 374-66-44</p>
                            <p className="text-sm font-normal">справочная служба</p>
                        </div>
                        <div className="flex flex-col text-left mb-[16px]">
                            <p className="text-sm font-medium mb-[8px]">+99 890 253-77-53</p>
                            <p className="text-sm font-normal">интернет-магазин</p>
                        </div>
                        <div className="flex flex-col text-left mb-[31px]">
                            <p className="text-sm font-medium mb-[8px]">Оставайтесь на связи</p>
                            <div className="flex items-center gap-[16px]">
                                <div>
                                    <Facebook />
                                </div>
                                <div>
                                    <Odin />
                                </div>
                                <div>
                                    <Wko />
                                </div>
                                <div>
                                    <YouTube />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[146px] items-center justify-center">
                        <div className="w-[327px] md:w-[213px] h-[32px] flex md:flex-col items-center md:items-start justify-between mb-[23px]">
                            <p className="md:hidden">О магазине</p>
                            <p className="text-left hidden md:inline-block w-[311px] mb-[16px]">Условия обмена и возврата</p>
                            <ul className=" hidden md:flex md:flex-col gap-[16px]">
                                <li>Каталог</li>
                                <li>О компании</li>
                                <li>Контакты</li>
                                <li>Доставка</li>
                                <li>Оплата</li>
                            </ul>
                            <div className=" md:hidden w-[32px] h-[32px] rounded-[100px]">
                                <DownIcon />
                            </div>
                        </div>
                        <div className="w-[327px] md:w-[170px] h-[32px] flex md:flex-col md:items-start items-center justify-between mb-[23px]">
                            <p className="md:hidden">Клиентам</p>
                            <p className="hidden md:inline-block mb-[16px]">Клиентам</p>
                            <ul className=" hidden md:flex md:flex-col gap-[16px]">
                                <li>Личный кабинет</li>
                                <li>Блог</li>
                                <li>Обратная связь</li>
                            </ul>
                            <div className=" md:hidden w-[32px] h-[32px] rounded-[100px]">
                                <DownIcon />
                            </div>
                        </div>
                        <div className=" w-[327px] md:w-[170px] h-[32px] flex md:flex-col md:items-start items-center justify-between mb-[23px]">
                            <p className="md:mb-[16px]">Информация</p>
                            <ul className=" hidden md:flex md:flex-col gap-[16px]">
                                <li>Пользовательское соглашение</li>
                                <li>Политика конфиденциальности и оферта</li>
                            </ul>
                            <div className="  md:hidden w-[32px] h-[32px] rounded-[100px]">
                                <DownIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};