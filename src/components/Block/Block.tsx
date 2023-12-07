import "./styles.scss";
import React from "react";

type BlockProps = {
  variant: "bruin" | "roze" | "groen";
  className?: string;
  button?: React.ReactNode;
  title: string;
  inleiding?: string;
  toelichting: string;
  terugKnop?: boolean;
};
const Block: React.FunctionComponent<BlockProps> = ({
  variant,
  className,
  button,
  inleiding,
  terugKnop,
  title,
  toelichting,
}) => {
  return (
    <section className={`block block-${variant} ${className}`}>
      {terugKnop}
      <p className={"medium"}>{inleiding}</p>
      <h1>{title}</h1>
      <p className={"regular"}>{toelichting}</p>
      {button}
    </section>
  );
};
export default Block;
