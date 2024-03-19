import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";



export const UserLayout = () => {
    return (
        <>
            <div className="flex flex-col justify-between">
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};