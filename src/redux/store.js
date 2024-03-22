import { configureStore } from "@reduxjs/toolkit";
import todoStore from "./reducer/todoStore";


export const store = configureStore({
    reducer: {
        todo: todoStore,
    }
});