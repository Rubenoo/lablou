import "./styles.scss";
import React from "react";
import { TerugKnop } from "../TerugKnop/TerugKnop.tsx";

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
      {inleiding && <p className={"medium"}>{inleiding}</p>}
      <h1>{titel}</h1>
      <p className={"regular"}>{toelichting}</p>
      <div className={"mt-auto"}>{button}</div>
    </section>
  );
};
export default Block;
