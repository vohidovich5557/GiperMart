import { configureStore } from "@reduxjs/toolkit";
import todoStore from "./reducer/todoStore";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import filterSlice from "./reducer/filter-slice";
import { saveState } from "../config/localstorage";
import { addData, setProductCount, setTotalPrice, toggle, deletData } from "./reducer/todoStore";

const countMiddlleware = createListenerMiddleware();

countMiddlleware.startListening({
    matcher: isAnyOf(addData, deletData, toggle),
    effect: (_, api) => {
        api.dispatch(setProductCount());
        api.dispatch(setTotalPrice());
    }
})



export const store = configureStore({
    reducer: {
        todo: todoStore,
        filter: filterSlice,
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware().concat(countMiddlleware.middleware),
});

store.subscribe(() => {
    saveState("users", store.getState().todo)
});