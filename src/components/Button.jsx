import React from "react";

function Button({
  children,
  variant,
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseStyle =
    "rounded-md font-medium transition-all duration-300 ease-in-out focus:outline-none";

  const variants = {
    primary: "bg-[#6C25FF] text-white hover:bg-[#6C25FF]/90",
    secondary: "bg-[#6C25FF4B] text-[#1D2226] hover:bg-[#6C25FF45]",
  };

  const sizes = {
    md: "w-full py-3 text-sm md:text-base",
    lg: "w-full py-3 text-lg",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;