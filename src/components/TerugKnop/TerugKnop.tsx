import React from "react";
import { Link } from "react-router-dom";

type TerugKnopProps = {
  className?: string;
  variant: "flexruimtes" | "home";
};

export const TerugKnop: React.FunctionComponent<TerugKnopProps> = ({
  className,
  variant,
}) => {
  const to = variant === "flexruimtes" ? "/flexruimtes/" : "/";
  const text =
    variant === "flexruimtes" ? "Terug naar overzicht" : "Naar homepage";
  return (
    <Link className={`link medium ${className}`} to={to}>
      <img alt={"pijl"} src={"/assets/svg/pijl.svg"} />
      {text}
    </Link>
  );
};
