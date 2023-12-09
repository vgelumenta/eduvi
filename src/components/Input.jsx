import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

const variants = {
  fill: {
    white_A700_33: "bg-white-A700_33 text-white-A700",
    white_A700: "bg-white-A700 text-gray-700",
  },
};
const shapes = { round: "rounded-[10px]" };
const sizes = {
  xs: "p-[13px]",
  sm: "p-4",
  md: "pb-[21px] pl-5 pr-3 pt-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      value,
      onChange,
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
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            value={value} 
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700_33", "white_A700"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { Input };
