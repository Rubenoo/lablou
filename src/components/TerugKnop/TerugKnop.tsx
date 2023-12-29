import React from "react";
import { Link } from "react-router-dom";

type TerugKnopProps = {
  className?: string;
};

export const TerugKnop: React.FunctionComponent<TerugKnopProps> = ({
  className,
}) => {
  return (
    <Link className={`link medium ${className}`} to={"/lablou/"}>
      <img alt={"pijl"} src={"/lablou/assets/svg/pijl.svg"} />
      Naar homepage
    </Link>
  );
};
