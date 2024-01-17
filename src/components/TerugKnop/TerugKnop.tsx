import React from "react";
import { Link } from "react-router-dom";

type TerugKnopProps = {
  className?: string;
  variant: "zaalverhuur" | "home";
};

export const TerugKnop: React.FunctionComponent<TerugKnopProps> = ({
  className,
  variant,
}) => {
  const to = variant === "zaalverhuur" ? "/lablou/zaalverhuur/" : "/lablou/";
  const text =
    variant === "zaalverhuur" ? "Terug naar overzicht" : "Naar homepage";
  return (
    <Link className={`link medium ${className}`} to={to}>
      <img alt={"pijl"} src={"/lablou/assets/svg/pijl.svg"} />
      {text}
    </Link>
  );
};
