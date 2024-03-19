import { Home } from "../../pages/home"
import {Category} from "../../pages/category";
import { nanoid } from "@reduxjs/toolkit";


export const homeRoutes = [
    {
        component: <Home />,
        id: nanoid(),
    },

    {
        component: <Category />,
        id: nanoid(),
        path: "category/:id"
    }
];