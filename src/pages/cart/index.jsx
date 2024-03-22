import React from "react";
import { useSelector } from "react-redux";


export const Cart = () => {
    const { users } = useSelector((state) => state.todo);
    console.log(users);
    return (
        <>
            {users?.map((item) => (
                <h2>{item.title}</h2>
            ))}
        </>
    )
};