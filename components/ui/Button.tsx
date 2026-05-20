import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-neutral-1100 border-neutral-1100 h-[50px] w-[205px] cursor-pointer border text-xl font-semibold text-white",
        "hover:text-neutral-1100 transition-all duration-300 hover:bg-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
