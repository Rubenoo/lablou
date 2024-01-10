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
        Op zoek naar een toffe en goed bereikbare flexplek in regio Zeist?
      </h2>
      <p>
        Dan moet je bij Lab Lou zijn! Lekkere koffie, heerlijke lunch, een fijne
        werkplek èn leuke mensen ontmoeten! Reserveer nu!
      </p>
      <ContactOpnemenKnop>Reserveren</ContactOpnemenKnop>
    </section>
  );
};
export default CTABlock;
