import "./styles.scss";
import React from "react";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";

type CTABlockProps = {
  className?: string;
};

const CTABlock: React.FunctionComponent<CTABlockProps> = ({ className }) => {
  return (
    <section className={`cta-container ${className}`}>
      <h2>Zoek jij een goed bereikbare flexwerkplek in Zeist?</h2>
      <p>
        Dan moet je bij Lab Lou zijn! Lekkere koffie, heerlijke lunch (op
        aanvraag), een fijne werkplek én leuke mensen ontmoeten!
      </p>
      <ContactOpnemenKnop href={"/#/flexruimtes"}>
        Reserveer nu
      </ContactOpnemenKnop>
    </section>
  );
};
export default CTABlock;
