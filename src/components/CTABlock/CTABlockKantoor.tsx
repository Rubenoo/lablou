import "./styles.scss";
import React from "react";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";

type CTABlockProps = {
  className?: string;
};

const CTABlock: React.FunctionComponent<CTABlockProps> = ({ className }) => {
  return (
    <section className={`cta-container ${className}`}>
      <h2>
        Op zoek naar een fijne en goed bereikbare plek om te flexwerken,
        vergaderen of een training te geven?
      </h2>
      <p>
        Dan zit je goed bij Lab Lou! Je vindt hier koffie van de Koffiebak,
        heerlijke lunch van Laura’s Sabor (op aanvraag) én een inspirerende
        werkomgeving.
      </p>
      <ContactOpnemenKnop href={"/#/flexruimtes"}>
        Reserveer nu
      </ContactOpnemenKnop>
    </section>
  );
};
export default CTABlock;
