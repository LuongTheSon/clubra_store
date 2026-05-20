import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-4xl relative cursor-pointer border-2 border-neutral-950 bg-neutral-950 p-[12px_42px] text-center font-medium text-white transition-all duration-300 hover:bg-white hover:text-neutral-950",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
