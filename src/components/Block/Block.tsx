import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

type BlockProps = {
  variant: "bruin" | "roze" | "groen";
  className?: string;
  button?: React.ReactNode;
  titel: string;
  inleiding?: string;
  toelichting?: string;
  terugKnop?: boolean;
};
const Block: React.FunctionComponent<BlockProps> = ({
  variant,
  className,
  button,
  inleiding,
  terugKnop,
  titel,
  toelichting,
}) => {
  return (
    <section className={`block block-${variant} ${className}`}>
      {terugKnop && <TerugKnop />}
      <p className={"medium"}>{inleiding}</p>
      <h1>{titel}</h1>
      <p className={"regular"}>{toelichting}</p>
      {button}
    </section>
  );
};
export default Block;

const TerugKnop: React.FunctionComponent = () => {
  return (
    <Link className={"link medium"} to={"/lablou/"}>
      <img alt={"pijl"} src={"/lablou/assets/svg/pijl.svg"} />
      Naar homepage
    </Link>
  );
};
