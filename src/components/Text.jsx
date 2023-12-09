import React from "react";

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

const sizeClasses = {
  txtInterMedium16Gray700: "font-inter font-medium",
  txtMetropolisMedium16DeeppurpleA200: "font-medium font-metropolis",
  txtMetropolisSemiBold20: "font-metropolis font-semibold",
  txtMetropolisMedium14Deeporange40087: "font-medium font-metropolis",
  txtInterMedium16Deeporange400: "font-inter font-medium",
  txtAirbnbCerealAppMedium20: "font-airbnbcerealapp font-medium",
  txtAirbnbCerealAppMedium14DeeppurpleA200: "font-airbnbcerealapp font-medium",
  txtMetropolisRegular16Gray900: "font-metropolis font-normal",
  txtMetropolisSemiBold18: "font-metropolis font-semibold",
  txtMetropolisSemiBold24Gray900: "font-metropolis font-semibold",
  txtMetropolisBold45WhiteA700: "font-bold font-metropolis",
  txtMetropolisSemiBold20Gray900: "font-metropolis font-semibold",
  txtMetropolisMedium16Gray90066: "font-medium font-metropolis",
  txtMetropolisMedium14: "font-medium font-metropolis",
  txtMetropolisBold65: "font-bold font-metropolis",
  txtMetropolisMedium16: "font-medium font-metropolis",
  txtInterMedium16: "font-inter font-medium",
  txtMetropolisSemiBold30: "font-metropolis font-semibold",
  txtMetropolisRegular16: "font-metropolis font-normal",
  txtMetropolisBold45: "font-bold font-metropolis",
  txtInterMedium14: "font-inter font-medium",
  txtMetropolisSemiBold45: "font-metropolis font-semibold",
  txtMetropolisRegular16WhiteA700b2: "font-metropolis font-normal",
  txtMetropolisSemiBold24: "font-metropolis font-semibold",
  txtAirbnbCerealAppMedium14: "font-airbnbcerealapp font-medium",
  txtMetropolisSemiBold18Gray90087: "font-metropolis font-semibold",
  txtMetropolisMedium16Gray900: "font-medium font-metropolis",
  txtInterSemiBold22: "font-inter font-semibold",
  txtMetropolisBold40: "font-bold font-metropolis",
  txtMetropolisSemiBold25: "font-metropolis font-semibold",
  txtMetropolisMedium16Gray700: "font-medium font-metropolis",
  txtInterRegular16: "font-inter font-normal",
};


