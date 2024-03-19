import clsx from "clsx";



export const Button = ({variant, children, icon: Icon, onClick}) => {
    return (
        <button onClick={onClick} className={clsx("", {
            "w-[42px] h-[42px] flex items-center justify-center bg-primary":variant == "primary",
            "w-[158px] h-[48px] bg-primary py-[10px] pl-[15px] gap-[15px] flex  items-center": variant == "secondary",
        })}>
            {Icon ? Icon : ""}
            {children}
        </button>
    )
}