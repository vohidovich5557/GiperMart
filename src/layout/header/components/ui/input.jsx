import React from "react";
import clsx from "clsx";





export const Input = React.forwardRef(
    (
        {
            name,
            placeholder,
            value,
            onChange,
            id,
            type,
            label,
            error,
            helperText,
            variant,
            clasname,
            ...resTprop
        },
        ref,
    ) => {
        return (
            <div className="flex">
                <input
                    {...resTprop}
                    className={clsx("outline-none", {
                        "w-[297px] h-[42px] pl-[8px] py-[8px] bg-grayInput": variant == 'primary',
                        " lg:w-[673px] md:w-[500px] h-[48px] border border-black pl-[16px] py-[16px] bg-transparent": variant == "secondary",
                        " ": variant == "smooth",
                    }, clasname)}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    id={id}
                    placeholder={placeholder}
                    type={type}

                />
            </div>
        )
    }
)


