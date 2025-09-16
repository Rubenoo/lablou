import "./styles.scss";
import { ZaalType } from "../../pages/Flexruimtes/types.ts";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import React from "react";

type AanvullendeInformatieBlockProps = ZaalType & {
  className?: string;
};

const AanvullendeInformatieBlock: React.FunctionComponent<
  AanvullendeInformatieBlockProps
> = ({
  className,
  index,
  informatie,
  aanvullendeInformatie,
  contact,
  link,
}) => {
  const informatieElements = informatie?.map((info, index) => (
    <div key={index}>
      <h4>{info.titel}</h4>
      <p>{info.gegevens}</p>
    </div>
  ));
  const contactTekst = link ? "Reserveren" : "Contact";
  return (
    <section
      key={index}
      id={"aanvullende-informatie"}
      className={`aanvullende-informatie-container ${className}`}
    >
      <div className={"info"}>
        <h1>Aanvullende informatie</h1>
        <p>{aanvullendeInformatie}</p>
        <ContactOpnemenKnop
          className={"d-none d-lg-block"}
          href={link}
          target="_blank"
        >
          {contactTekst}
        </ContactOpnemenKnop>
      </div>
      <div>
        <div className={"gegevens"}>{informatieElements}</div>
        {contact ? (
          <ContactOpnemenKnop className={"d-lg-none d-block"}>
            {contactTekst}
          </ContactOpnemenKnop>
        ) : (
          <ContactOpnemenKnop
            className={"d-lg-none d-block"}
            href={link}
            target="_blank"
          >
            {contactTekst}
          </ContactOpnemenKnop>
        )}
      </div>
    </section>
  );
};
export default AanvullendeInformatieBlock;
