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
  terugKnop?: "home" | "zaalverhuur";
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
      {terugKnop === "home" && <TerugKnop variant={"home"} />}
      {terugKnop === "zaalverhuur" && <TerugKnop variant={"zaalverhuur"} />}
      {inleiding && <p className={"medium"}>{inleiding}</p>}
      <h1>{titel}</h1>
      <p className={"regular"}>{toelichting}</p>
      <div className={"mt-auto"}>{button}</div>
    </section>
  );
};
export default Block;
