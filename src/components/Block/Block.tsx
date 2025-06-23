import "./styles.scss";
import React from "react";
import { TerugKnop } from "../TerugKnop/TerugKnop.tsx";

type BlockProps = {
  variant: "bruin" | "roze" | "groen";
  className?: string;
  button?: React.ReactNode;
  titel: string;
  inleiding?: string;
  toelichting?: string | React.ReactNode;
  terugKnop?: "home" | "flexruimtes";
  style?: React.CSSProperties;
};
const Block: React.FunctionComponent<BlockProps> = ({
  variant,
  className,
  button,
  inleiding,
  terugKnop,
  titel,
  toelichting,
  ...props
}) => {
  return (
    <section className={`block block-${variant} ${className}`} {...props}>
      {terugKnop === "home" && <TerugKnop variant={"home"} />}
      {terugKnop === "flexruimtes" && <TerugKnop variant={"flexruimtes"} />}
      {inleiding && <p className={"medium"}>{inleiding}</p>}
      <h1>{titel}</h1>
      <p className={"regular"}>{toelichting}</p>
      <div className={"mt-auto"}>{button}</div>
    </section>
  );
};
export default Block;
