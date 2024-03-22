import { Home } from "../../pages/home"
import { Category } from "../../pages/category";
import { nanoid } from "@reduxjs/toolkit";
import { ProductDetail } from "../../pages/product-datails";
import { Cart } from "../../pages/cart";


export const homeRoutes = [
    {
        component: <Home />,
        id: nanoid(),
    },

    {
        component: <Category />,
        id: nanoid(),
        path: "category/:slug"
    },

    {
        component: <ProductDetail />,
        id: nanoid(),
        path: "detail/:slug",
    },

    {
        component: <Cart />,
        id: nanoid(),
        path: "cart/:slug",
    }
];