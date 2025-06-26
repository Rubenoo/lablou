import "./styles.scss";
import React from "react";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";

type CTABlockProps = {
  className?: string;
};

const CTABlockNieuwsbrief: React.FunctionComponent<CTABlockProps> = ({
  className,
}) => {
  return (
    <section className={`cta-container nieuwsbrief ${className}`}>
      <h2>Blijf op de hoogte van Lab Lou</h2>
      <p>
        Schrijf je in voor onze nieuwsbrief en mis geen enkel evenement of
        update van onze creatieve broedplaats.
      </p>
      <ContactOpnemenKnop
        href={
          "https://dashboard.mailerlite.com/forms/416479/124398638019380808/share"
        }
        target={"_blank"}
      >
        Inschrijven nieuwsbrief
      </ContactOpnemenKnop>
    </section>
  );
};
export default CTABlockNieuwsbrief;
