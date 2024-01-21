import "./styles.scss";
import React from "react";

type LogoProps = {
  variant: "header" | "footer";
  className?: string;
};
const Logo: React.FunctionComponent<LogoProps> = ({ variant, className }) => {
  const src =
    variant === "header"
      ? "/assets/svg/lablou-wit-groot.svg"
      : "/assets/svg/lablou-wit-klein.svg";
  return <img src={src} className={`logo ${className}`} alt={"LABLOU LOGO"} />;
};
export default Logo;
