import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[5px]" };
const variants = {
  fill: {
    indigo_50: "bg-indigo-50 text-deep_purple-A200",
    deep_purple_50_04: "bg-deep_purple-50_04",
    deep_orange_400: "bg-deep_orange-400",
    white_A700: "bg-white-A700 text-gray-900",
    gray_50: "bg-gray-50",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
  },
  outline: {
    deep_purple_A200:
      "border border-deep_purple-A200 border-solid text-deep_purple-A200",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[9px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xl",
  variant = "fill",
  color = "deep_purple_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_50",
    "deep_purple_50_04",
    "deep_orange_400",
    "white_A700",
    "gray_50",
    "deep_purple_A200",
  ]),
};

export { Button };
