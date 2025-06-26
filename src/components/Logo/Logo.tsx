import "./styles.scss";
import React from "react";

type LogoProps = {
  className?: string;
};
const Logo: React.FunctionComponent<LogoProps> = ({ className }) => {
  return (
    <img
      src={"/assets/svg/lablou-wit-klein.svg"}
      className={`logo ${className}`}
      alt={"LABLOU LOGO"}
    />
  );
};
export default Logo;
