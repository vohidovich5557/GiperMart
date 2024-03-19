import React from "react";



export const useModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(!isOpen);
    return {isOpen, close, toggle, open};
};