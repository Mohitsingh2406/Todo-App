import React from "react";

type ButtonProps ={
    buttonType ? : "primary"| "secondary";
    children : React.ReactNode;
};


export default function Button({buttonType , children}: ButtonProps) {

    return (
        <button  className={`h-[45px] bg-[#6d8cd3] hover:bg-[#4ac1db] w-full text-black rounded-[5px] cursor-pointer ${buttonType === "secondary" ? "opacity-[85%]" :""}`}>{children}</button>
    )
}
