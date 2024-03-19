import React from "react";
import { topheaderData } from "./header-data";
import { CallIcon } from "../../assets/header-icon/callIcon";
import { AccountIcon } from "../../assets/header-icon/account-icon";
import logo from "../../assets/logo.svg";
import { LikeIcon } from "../../assets/header-icon/like-icon";
import { CartIcon } from "../../assets/header-icon/cart-icon";
import { Modal } from "./components/ui/modal";
import { Button } from "./components/ui/button";
import { useModal } from "../../hook/useModal";
import { Link } from "react-router-dom";
import { AccountCircle } from "../../assets/header-icon/account-circle";
import { SearchIcon } from "../../assets/header-icon/search-icon";
import { CatalogIcon } from "../../assets/header-icon/katalog-icon";
import Skeleton from "react-loading-skeleton";
import { useGetCatalog } from "./services/query/useGetCategory";
import { Input } from "./components/ui/input";
import { CatalogCard } from "./components/card/catalogCard";


export const Header = () => {
    const { isOpen, open, close } = useModal();
    const { isLoading, data } = useGetCatalog();
    return (
        <>
            <div className="container  lg:pb-[19px] pb-[16px] flex flex-col justify-center">
                <Modal close={close} isOpen={isOpen}>
                    <Link className="text-red-600" to="/category/123">
                        Category
                    </Link>
                    {isLoading ? (
                        <Skeleton count={7} height={50} />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center h-[60vh] md:h-auto lg:h-auto lg:py-[52px] lg:px-[92px] overflow-scroll gap-5">
                            {data?.map((item) => (
                                <Link to={`/category/${item.name}`}>
                                   <CatalogCard 
                                   img={item.img}
                                   text={item.text}
                                   id={item.id}

                                   />
                                </Link>
                            ))}
                        </div>
                    )}
                </Modal>
                <div className=" items-center pr-[60px] hidden lg:flex gap-[24px] mt-[8px] justify-end">
                    {topheaderData.map((item) => (
                        <p key={item.id}><a href={item.path}>{item.name}</a></p>
                    ))}
                    <div className="flex items-center gap-[19px]">
                        <CallIcon />
                        <p>+998 90 253 77 53</p>
                    </div>
                </div>
                <div className="flex items-center  pt-[19px] lg:px-[40px] justify-between px-[19px]">
                    <div className="lg:hidden md:hidden">
                        <AccountIcon />
                    </div>
                    <div className="flex items-center gap-[57px]">
                        <img src={logo} alt="img" />
                        <div className="hidden lg:block">
                            <Button icon={<CatalogIcon />} onClick={open} variant="secondary">
                                Каталог
                            </Button>
                        </div>
                    </div>
                    <div className=" items-center hidden md:flex lg:flex relative">
                        <Input variant="secondary" placeholder="Поиск" />
                        <div className=" absolute md:translate-x-[460px] lg:translate-x-[623px]">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="flex items-center gap-[19px] lg:gap-[32px]">
                        <div className="hidden flex-col items-center lg:flex lg:flex-col ">
                            <AccountCircle />
                            <p className="text-md font-normal">Войти</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <LikeIcon />
                            <p className="text-md font-normal hidden lg:block">Избранное</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className=" relative">
                                <CartIcon />
                                <span className="w-[16px] h-[16px] px-[7px] py-[7px] absolute top-[-7px] right-[-6px] rounded-[20px] bg-red-600 flex items-center justify-center text-white">3</span>
                            </div>
                            <p className="text-md font-normal hidden lg:block">Корзина</p>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden justify-center lg:hidden items-center gap-[4px] px-[16px] mt-[7px]">
                    <Button icon={<CatalogIcon />} onClick={open} variant="primary">

                    </Button>
                    <div className="flex items-center relative">
                        <Input placeholder="Поиск" icon={<SearchIcon />} variant="primary" />
                        <div className=" absolute translate-x-[252px]">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};