import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    deep_purple_A700: "bg-deep_purple-A700 text-white-A700",
  },
  outline: {
    black_900: "border-black-900 border border-solid text-blue_gray-400",
  },
};
const sizes = {
  md: "h-[80px] pl-[35px] pr-4 text-lg",
  sm: "h-[60px] pl-4 pr-[35px] text-base",
  xs: "h-[25px] px-[15px] text-xs",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "xs",
      color = "deep_purple_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_50", "deep_purple_A700", "black_900"]),
};

export { Input };
