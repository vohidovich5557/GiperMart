import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/localstorage";


const initialState = loadState("users") || {
    users: [],
    count: 0,
    totalPrice: 0,
}

export const todoStore = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setProductCount: (state, action) => {
            return { ...state, count: state.users.length }
        },
        setTotalPrice: (state, action) => {
            const newPrice = state.users.reduce((a, b) => {
                return a + Number(b.userPrice)
            }, 0);

            return { ...state, totalPrice: newPrice }
        },
        addData: (state, action) => {
            const products = state.users.find((item) =>
                item.id === action.payload.id
            );
            if (!products) {
                return { ...state, users: [...state.users, { ...action.payload, userCount: 1, userPrice: action.payload.price, totalPrice: 0 }] }
            }

            return state;
        },

        toggle: (state, action) => {
            if (action.payload.type === "increament") {
                const newProduct = state.users.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: (item.price * (item.userCount + 1)).toFixed(2)
                        }
                    }
                    return item;
                });

                return { ...state, users: newProduct }
            }
            if (action.payload.type === "decreament") {
                const newProduct = state.users.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount - 1,
                            userPrice: (item.price * (item.userCount - 1)).toFixed(2),
                        }
                    }
                    return item;
                });

                return { ...state, users: newProduct }
            }
        },

        deletData: (state, action) => {
            return { ...state, users: state.users.filter((item) => item.id !== action.payload.id) }
        },
    }
});


export default todoStore.reducer;
export const { addData, toggle, deletData, setProductCount, setTotalPrice } = todoStore.actions;