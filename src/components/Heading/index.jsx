import React from "react";

const sizes = {
  "3xl": "text-4xl font-semibold",
  "2xl": "text-2xl font-semibold",
  xl: "text-xl font-semibold",
  "4xl": "text-5xl font-semibold",
  s: "text-xs font-semibold",
  md: "text-sm font-bold",
  xs: "text-[10px] font-semibold",
  lg: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
